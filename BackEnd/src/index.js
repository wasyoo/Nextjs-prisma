import { GraphQLServer } from 'graphql-yoga';
import bcrypt from 'bcryptjs';
import { prisma } from '../generated/prisma-client';
import typeDefs from './schema.graphql';
import { generateTokenForUser, getUserId } from './utils/jwt.utils.js';

const resolvers = {
  Query: {
    users: (root, args, ctx) => ctx.prisma.users(args),
    user: (root, { where }, ctx) => ctx.prisma.user({ ...where }),
    products: (root, args, ctx) => ctx.prisma.products(args),
    product: (root, { where }, ctx) => ctx.prisma.product({ ...where }),
    categories: (root, args, ctx) => ctx.prisma.categories(args),
    category: (root, { where }, ctx) => ctx.prisma.category({ ...where }),
    brands: (root, args, ctx) => ctx.prisma.brands(args),
    brand: (root, { where }, ctx) => ctx.prisma.brand({ ...where }),
  },
  Mutation: {
    createUser: async (root, { data }, ctx) => {
      const emailTaken = await ctx.prisma.$exists.user({ email: data.email });

      if (emailTaken) {
        throw new Error('Email taken :(');
      }

      const user = await ctx.prisma.createUser({
        ...data,
        password: bcrypt.hashSync(data.password, 10),
      });

      return {
        token: generateTokenForUser(user.id),
        user,
      };
    },
    login: async (_, { data }, ctx) => {
      const user = await ctx.prisma.user({ email: data.email });
      if (!user) {
        throw new Error('wrong email');
      }
      if (!bcrypt.compareSync(data.password, user.password)) {
        throw new Error('wrong password');
      }
      const token = generateTokenForUser(user.id);
      return {
        user,
        token,
      };
    },
    updateMe: async (root, { data }, ctx) => {
      const userId = getUserId(ctx.request.headers.authorization);
      const user = await ctx.prisma.$exists.user({ id: userId });
      if (!user) {
        throw new Error('User not found');
      }
      return ctx.prisma.updateUser({
        data: {
          ...data,
        },
        where: {
          id: userId,
        },
      });
    },
    createProduct: (root, { data }, ctx) => ctx.prisma.createProduct({ ...data }),
    updateProduct: async (root, { where, data }, ctx) => {
      const product = await ctx.prisma.$exists.product({ ...where });
      if (!product) {
        throw new Error('Product not found');
      }
      return ctx.prisma.updateProduct({
        data: {
          ...data,
        },
        where: {
          ...where,
        },
      });
    },
    deleteProduct: async (root, { where }, ctx) => {
      const product = await ctx.prisma.$exists.product({ ...where });
      if (!product) {
        throw new Error('Product not found');
      }
      return ctx.prisma.deleteProduct({ ...where });
    },
    createCategory: (root, { data }, ctx) => ctx.prisma.createCategory({ ...data }),
    updateCategory: async (root, { where, data }, ctx) => {
      const category = await ctx.prisma.$exists.category({ ...where });
      if (!category) {
        throw new Error('Category not found');
      }
      return ctx.prisma.updateCategory({
        data: {
          ...data,
        },
        where: {
          ...where,
        },
      });
    },
    deleteCategory: async (root, { where }, ctx) => {
      const category = await ctx.prisma.$exists.category({ ...where });
      if (!category) {
        throw new Error('Category not found');
      }
      return ctx.prisma.deleteCategory({ ...where });
    },
    createBrand: (root, { data }, ctx) => ctx.prisma.createBrand({ ...data }),
    updateBrand: async (root, { where, data }, ctx) => {
      const brandId = await ctx.prisma.$exists.brand({ ...where });
      if (!brandId) {
        throw new Error('Brand not found');
      }
      return ctx.prisma.updateBrand({
        data: {
          ...data,
        },
        where: {
          ...where,
        },
      });
    },
    deleteBrand: async (root, { where }, ctx) => {
      const brandId = await ctx.prisma.$exists.brand({ ...where });
      if (!brandId) {
        throw new Error('Brand not found');
      }
      return ctx.prisma.deleteBrand({ ...where });
    },
  },
  Product: {
    category: (root, args, ctx) => ctx.prisma.product({ id: root.id }).category(),
    brand: (root, args, ctx) => ctx.prisma.product({ id: root.id }).brand(),
  },
  Category: {
    parent: (root, args, ctx) => ctx.prisma.category({ id: root.id }).parent(),
    products: (root, args, ctx) => ctx.prisma.category({ id: root.id }).products(),
  },
  User: {
    password: (root, args, ctx) => {
      const userId = getUserId(ctx.request.headers.authorization, false);
      if (userId && userId === root.id) {
        return root.password;
      }
      return null;
    },
  },
};

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: ({ request }) => ({
    prisma,
    request,
  }),
  resolverValidationOptions: {
    requireResolversForResolveType: false,
  },
});

const options = {
  port: 8000,
  // endpoint: '/graphql',
  // subscriptions: '/subscriptions',
  // playground: '/playground',
};

server.start(options , () => console.log(`Server is running on localhost:${options.port}`)); // eslint-disable-line