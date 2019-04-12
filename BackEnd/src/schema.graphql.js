const typeDefs = `
type AggregateBrand {
  count: Int!
}

type AggregateCategory {
  count: Int!
}

type AggregateOrder {
  count: Int!
}

type AggregateOrderItem {
  count: Int!
}

type AggregateProduct {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Brand {
  id: ID!
  name: String
  description: String
  filename: String
}

type BrandConnection {
  pageInfo: PageInfo!
  edges: [BrandEdge]!
  aggregate: AggregateBrand!
}

input BrandCreateInput {
  name: String
  description: String
  filename: String
}

input BrandCreateOneInput {
  create: BrandCreateInput
  connect: BrandWhereUniqueInput
}

type BrandEdge {
  node: Brand!
  cursor: String!
}

enum BrandOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  filename_ASC
  filename_DESC
}

type BrandPreviousValues {
  id: ID!
  name: String
  description: String
  filename: String
}

type BrandSubscriptionPayload {
  mutation: MutationType!
  node: Brand
  updatedFields: [String!]
  previousValues: BrandPreviousValues
}

input BrandSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: BrandWhereInput
  AND: [BrandSubscriptionWhereInput!]
}

input BrandUpdateDataInput {
  name: String
  description: String
  filename: String
}

input BrandUpdateInput {
  name: String
  description: String
  filename: String
}

input BrandUpdateManyMutationInput {
  name: String
  description: String
  filename: String
}

input BrandUpdateOneInput {
  create: BrandCreateInput
  update: BrandUpdateDataInput
  upsert: BrandUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: BrandWhereUniqueInput
}

input BrandUpsertNestedInput {
  update: BrandUpdateDataInput!
  create: BrandCreateInput!
}

input BrandWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  filename: String
  filename_not: String
  filename_in: [String!]
  filename_not_in: [String!]
  filename_lt: String
  filename_lte: String
  filename_gt: String
  filename_gte: String
  filename_contains: String
  filename_not_contains: String
  filename_starts_with: String
  filename_not_starts_with: String
  filename_ends_with: String
  filename_not_ends_with: String
  AND: [BrandWhereInput!]
}

input BrandWhereUniqueInput {
  id: ID
}

type Category {
  id: ID!
  name: String
  parent: Category
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product!]
}

type CategoryConnection {
  pageInfo: PageInfo!
  edges: [CategoryEdge]!
  aggregate: AggregateCategory!
}

input CategoryCreateInput {
  name: String
  parent: CategoryCreateOneInput
  products: ProductCreateManyWithoutCategoryInput
}

input CategoryCreateOneInput {
  create: CategoryCreateInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateOneWithoutProductsInput {
  create: CategoryCreateWithoutProductsInput
  connect: CategoryWhereUniqueInput
}

input CategoryCreateWithoutProductsInput {
  name: String
  parent: CategoryCreateOneInput
}

type CategoryEdge {
  node: Category!
  cursor: String!
}

enum CategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type CategoryPreviousValues {
  id: ID!
  name: String
}

type CategorySubscriptionPayload {
  mutation: MutationType!
  node: Category
  updatedFields: [String!]
  previousValues: CategoryPreviousValues
}

input CategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: CategoryWhereInput
  AND: [CategorySubscriptionWhereInput!]
}

input CategoryUpdateDataInput {
  name: String
  parent: CategoryUpdateOneInput
  products: ProductUpdateManyWithoutCategoryInput
}

input CategoryUpdateInput {
  name: String
  parent: CategoryUpdateOneInput
  products: ProductUpdateManyWithoutCategoryInput
}

input CategoryUpdateManyMutationInput {
  name: String
}

input CategoryUpdateOneInput {
  create: CategoryCreateInput
  update: CategoryUpdateDataInput
  upsert: CategoryUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: CategoryWhereUniqueInput
}

input CategoryUpdateOneWithoutProductsInput {
  create: CategoryCreateWithoutProductsInput
  update: CategoryUpdateWithoutProductsDataInput
  upsert: CategoryUpsertWithoutProductsInput
  delete: Boolean
  disconnect: Boolean
  connect: CategoryWhereUniqueInput
}

input CategoryUpdateWithoutProductsDataInput {
  name: String
  parent: CategoryUpdateOneInput
}

input CategoryUpsertNestedInput {
  update: CategoryUpdateDataInput!
  create: CategoryCreateInput!
}

input CategoryUpsertWithoutProductsInput {
  update: CategoryUpdateWithoutProductsDataInput!
  create: CategoryCreateWithoutProductsInput!
}

input CategoryWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  parent: CategoryWhereInput
  products_some: ProductWhereInput
  AND: [CategoryWhereInput!]
}

input CategoryWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createBrand(data: BrandCreateInput!): Brand!
  updateBrand(data: BrandUpdateInput!, where: BrandWhereUniqueInput!): Brand
  updateManyBrands(data: BrandUpdateManyMutationInput!, where: BrandWhereInput): BatchPayload!
  upsertBrand(where: BrandWhereUniqueInput!, create: BrandCreateInput!, update: BrandUpdateInput!): Brand!
  deleteBrand(where: BrandWhereUniqueInput!): Brand
  deleteManyBrands(where: BrandWhereInput): BatchPayload!
  createCategory(data: CategoryCreateInput!): Category!
  updateCategory(data: CategoryUpdateInput!, where: CategoryWhereUniqueInput!): Category
  updateManyCategories(data: CategoryUpdateManyMutationInput!, where: CategoryWhereInput): BatchPayload!
  upsertCategory(where: CategoryWhereUniqueInput!, create: CategoryCreateInput!, update: CategoryUpdateInput!): Category!
  deleteCategory(where: CategoryWhereUniqueInput!): Category
  deleteManyCategories(where: CategoryWhereInput): BatchPayload!
  createOrder(data: OrderCreateInput!): Order!
  updateOrder(data: OrderUpdateInput!, where: OrderWhereUniqueInput!): Order
  updateManyOrders(data: OrderUpdateManyMutationInput!, where: OrderWhereInput): BatchPayload!
  upsertOrder(where: OrderWhereUniqueInput!, create: OrderCreateInput!, update: OrderUpdateInput!): Order!
  deleteOrder(where: OrderWhereUniqueInput!): Order
  deleteManyOrders(where: OrderWhereInput): BatchPayload!
  createOrderItem(data: OrderItemCreateInput!): OrderItem!
  updateOrderItem(data: OrderItemUpdateInput!, where: OrderItemWhereUniqueInput!): OrderItem
  updateManyOrderItems(data: OrderItemUpdateManyMutationInput!, where: OrderItemWhereInput): BatchPayload!
  upsertOrderItem(where: OrderItemWhereUniqueInput!, create: OrderItemCreateInput!, update: OrderItemUpdateInput!): OrderItem!
  deleteOrderItem(where: OrderItemWhereUniqueInput!): OrderItem
  deleteManyOrderItems(where: OrderItemWhereInput): BatchPayload!
  createProduct(data: ProductCreateInput!): Product!
  updateProduct(data: ProductUpdateInput!, where: ProductWhereUniqueInput!): Product
  updateManyProducts(data: ProductUpdateManyMutationInput!, where: ProductWhereInput): BatchPayload!
  upsertProduct(where: ProductWhereUniqueInput!, create: ProductCreateInput!, update: ProductUpdateInput!): Product!
  deleteProduct(where: ProductWhereUniqueInput!): Product
  deleteManyProducts(where: ProductWhereInput): BatchPayload!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  #custom Mutation
  createUser(data: UserCreateInput!): UserLogged!
  login(data: loginInput): UserLogged,
  updateMe(data: UserUpdateInput!): User
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Order {
  id: ID!
  user: User
  items(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem!]
  totalPrice: Float
  totalQuantity: Int
  createdAt: String
  updatedAt: String
  state: String
}

type OrderConnection {
  pageInfo: PageInfo!
  edges: [OrderEdge]!
  aggregate: AggregateOrder!
}

input OrderCreateInput {
  user: UserCreateOneWithoutOrderInput
  items: OrderItemCreateManyInput
  totalPrice: Float
  totalQuantity: Int
  createdAt: String
  updatedAt: String
  state: String
}

input OrderCreateManyWithoutUserInput {
  create: [OrderCreateWithoutUserInput!]
  connect: [OrderWhereUniqueInput!]
}

input OrderCreateWithoutUserInput {
  items: OrderItemCreateManyInput
  totalPrice: Float
  totalQuantity: Int
  createdAt: String
  updatedAt: String
  state: String
}

type OrderEdge {
  node: Order!
  cursor: String!
}

type OrderItem {
  id: ID!
  product: Product
  quantity: Int
}

type OrderItemConnection {
  pageInfo: PageInfo!
  edges: [OrderItemEdge]!
  aggregate: AggregateOrderItem!
}

input OrderItemCreateInput {
  product: ProductCreateOneInput
  quantity: Int
}

input OrderItemCreateManyInput {
  create: [OrderItemCreateInput!]
  connect: [OrderItemWhereUniqueInput!]
}

type OrderItemEdge {
  node: OrderItem!
  cursor: String!
}

enum OrderItemOrderByInput {
  id_ASC
  id_DESC
  quantity_ASC
  quantity_DESC
}

type OrderItemPreviousValues {
  id: ID!
  quantity: Int
}

input OrderItemScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [OrderItemScalarWhereInput!]
  OR: [OrderItemScalarWhereInput!]
  NOT: [OrderItemScalarWhereInput!]
}

type OrderItemSubscriptionPayload {
  mutation: MutationType!
  node: OrderItem
  updatedFields: [String!]
  previousValues: OrderItemPreviousValues
}

input OrderItemSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderItemWhereInput
  AND: [OrderItemSubscriptionWhereInput!]
}

input OrderItemUpdateDataInput {
  product: ProductUpdateOneInput
  quantity: Int
}

input OrderItemUpdateInput {
  product: ProductUpdateOneInput
  quantity: Int
}

input OrderItemUpdateManyDataInput {
  quantity: Int
}

input OrderItemUpdateManyInput {
  create: [OrderItemCreateInput!]
  update: [OrderItemUpdateWithWhereUniqueNestedInput!]
  upsert: [OrderItemUpsertWithWhereUniqueNestedInput!]
  delete: [OrderItemWhereUniqueInput!]
  connect: [OrderItemWhereUniqueInput!]
  set: [OrderItemWhereUniqueInput!]
  disconnect: [OrderItemWhereUniqueInput!]
  deleteMany: [OrderItemScalarWhereInput!]
  updateMany: [OrderItemUpdateManyWithWhereNestedInput!]
}

input OrderItemUpdateManyMutationInput {
  quantity: Int
}

input OrderItemUpdateManyWithWhereNestedInput {
  where: OrderItemScalarWhereInput!
  data: OrderItemUpdateManyDataInput!
}

input OrderItemUpdateWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  data: OrderItemUpdateDataInput!
}

input OrderItemUpsertWithWhereUniqueNestedInput {
  where: OrderItemWhereUniqueInput!
  update: OrderItemUpdateDataInput!
  create: OrderItemCreateInput!
}

input OrderItemWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  product: ProductWhereInput
  quantity: Int
  quantity_not: Int
  quantity_in: [Int!]
  quantity_not_in: [Int!]
  quantity_lt: Int
  quantity_lte: Int
  quantity_gt: Int
  quantity_gte: Int
  AND: [OrderItemWhereInput!]
}

input OrderItemWhereUniqueInput {
  id: ID
}

enum OrderOrderByInput {
  id_ASC
  id_DESC
  totalPrice_ASC
  totalPrice_DESC
  totalQuantity_ASC
  totalQuantity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
  state_ASC
  state_DESC
}

type OrderPreviousValues {
  id: ID!
  totalPrice: Float
  totalQuantity: Int
  createdAt: String
  updatedAt: String
  state: String
}

input OrderScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  totalPrice: Float
  totalPrice_not: Float
  totalPrice_in: [Float!]
  totalPrice_not_in: [Float!]
  totalPrice_lt: Float
  totalPrice_lte: Float
  totalPrice_gt: Float
  totalPrice_gte: Float
  totalQuantity: Int
  totalQuantity_not: Int
  totalQuantity_in: [Int!]
  totalQuantity_not_in: [Int!]
  totalQuantity_lt: Int
  totalQuantity_lte: Int
  totalQuantity_gt: Int
  totalQuantity_gte: Int
  createdAt: String
  createdAt_not: String
  createdAt_in: [String!]
  createdAt_not_in: [String!]
  createdAt_lt: String
  createdAt_lte: String
  createdAt_gt: String
  createdAt_gte: String
  createdAt_contains: String
  createdAt_not_contains: String
  createdAt_starts_with: String
  createdAt_not_starts_with: String
  createdAt_ends_with: String
  createdAt_not_ends_with: String
  updatedAt: String
  updatedAt_not: String
  updatedAt_in: [String!]
  updatedAt_not_in: [String!]
  updatedAt_lt: String
  updatedAt_lte: String
  updatedAt_gt: String
  updatedAt_gte: String
  updatedAt_contains: String
  updatedAt_not_contains: String
  updatedAt_starts_with: String
  updatedAt_not_starts_with: String
  updatedAt_ends_with: String
  updatedAt_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  AND: [OrderScalarWhereInput!]
  OR: [OrderScalarWhereInput!]
  NOT: [OrderScalarWhereInput!]
}

type OrderSubscriptionPayload {
  mutation: MutationType!
  node: Order
  updatedFields: [String!]
  previousValues: OrderPreviousValues
}

input OrderSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OrderWhereInput
  AND: [OrderSubscriptionWhereInput!]
}

input OrderUpdateInput {
  user: UserUpdateOneWithoutOrderInput
  items: OrderItemUpdateManyInput
  totalPrice: Float
  totalQuantity: Int
  createdAt: String
  updatedAt: String
  state: String
}

input OrderUpdateManyDataInput {
  totalPrice: Float
  totalQuantity: Int
  createdAt: String
  updatedAt: String
  state: String
}

input OrderUpdateManyMutationInput {
  totalPrice: Float
  totalQuantity: Int
  createdAt: String
  updatedAt: String
  state: String
}

input OrderUpdateManyWithoutUserInput {
  create: [OrderCreateWithoutUserInput!]
  delete: [OrderWhereUniqueInput!]
  connect: [OrderWhereUniqueInput!]
  set: [OrderWhereUniqueInput!]
  disconnect: [OrderWhereUniqueInput!]
  update: [OrderUpdateWithWhereUniqueWithoutUserInput!]
  upsert: [OrderUpsertWithWhereUniqueWithoutUserInput!]
  deleteMany: [OrderScalarWhereInput!]
  updateMany: [OrderUpdateManyWithWhereNestedInput!]
}

input OrderUpdateManyWithWhereNestedInput {
  where: OrderScalarWhereInput!
  data: OrderUpdateManyDataInput!
}

input OrderUpdateWithoutUserDataInput {
  items: OrderItemUpdateManyInput
  totalPrice: Float
  totalQuantity: Int
  createdAt: String
  updatedAt: String
  state: String
}

input OrderUpdateWithWhereUniqueWithoutUserInput {
  where: OrderWhereUniqueInput!
  data: OrderUpdateWithoutUserDataInput!
}

input OrderUpsertWithWhereUniqueWithoutUserInput {
  where: OrderWhereUniqueInput!
  update: OrderUpdateWithoutUserDataInput!
  create: OrderCreateWithoutUserInput!
}

input OrderWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  items_some: OrderItemWhereInput
  totalPrice: Float
  totalPrice_not: Float
  totalPrice_in: [Float!]
  totalPrice_not_in: [Float!]
  totalPrice_lt: Float
  totalPrice_lte: Float
  totalPrice_gt: Float
  totalPrice_gte: Float
  totalQuantity: Int
  totalQuantity_not: Int
  totalQuantity_in: [Int!]
  totalQuantity_not_in: [Int!]
  totalQuantity_lt: Int
  totalQuantity_lte: Int
  totalQuantity_gt: Int
  totalQuantity_gte: Int
  createdAt: String
  createdAt_not: String
  createdAt_in: [String!]
  createdAt_not_in: [String!]
  createdAt_lt: String
  createdAt_lte: String
  createdAt_gt: String
  createdAt_gte: String
  createdAt_contains: String
  createdAt_not_contains: String
  createdAt_starts_with: String
  createdAt_not_starts_with: String
  createdAt_ends_with: String
  createdAt_not_ends_with: String
  updatedAt: String
  updatedAt_not: String
  updatedAt_in: [String!]
  updatedAt_not_in: [String!]
  updatedAt_lt: String
  updatedAt_lte: String
  updatedAt_gt: String
  updatedAt_gte: String
  updatedAt_contains: String
  updatedAt_not_contains: String
  updatedAt_starts_with: String
  updatedAt_not_starts_with: String
  updatedAt_ends_with: String
  updatedAt_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  AND: [OrderWhereInput!]
}

input OrderWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Product {
  id: ID!
  name: String
  description: String
  price: Float
  quantity: Int
  image: String
  category: Category
  brand: Brand
}

type ProductConnection {
  pageInfo: PageInfo!
  edges: [ProductEdge]!
  aggregate: AggregateProduct!
}

input ProductCreateInput {
  name: String
  description: String
  price: Float
  quantity: Int
  image: String
  category: CategoryCreateOneWithoutProductsInput
  brand: BrandCreateOneInput
}

input ProductCreateManyWithoutCategoryInput {
  create: [ProductCreateWithoutCategoryInput!]
  connect: [ProductWhereUniqueInput!]
}

input ProductCreateOneInput {
  create: ProductCreateInput
  connect: ProductWhereUniqueInput
}

input ProductCreateWithoutCategoryInput {
  name: String
  description: String
  price: String
  quantity: String
  image: String
  brand: BrandCreateOneInput
}

type ProductEdge {
  node: Product!
  cursor: String!
}

enum ProductOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  price_ASC
  price_DESC
  quantity_ASC
  quantity_DESC
  image_ASC
  image_DESC
}

type ProductPreviousValues {
  id: ID!
  name: String
  description: String
  price: String
  quantity: String
  image: String
}

input ProductScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  quantity: String
  quantity_not: String
  quantity_in: [String!]
  quantity_not_in: [String!]
  quantity_lt: String
  quantity_lte: String
  quantity_gt: String
  quantity_gte: String
  quantity_contains: String
  quantity_not_contains: String
  quantity_starts_with: String
  quantity_not_starts_with: String
  quantity_ends_with: String
  quantity_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  AND: [ProductScalarWhereInput!]
  OR: [ProductScalarWhereInput!]
  NOT: [ProductScalarWhereInput!]
}

type ProductSubscriptionPayload {
  mutation: MutationType!
  node: Product
  updatedFields: [String!]
  previousValues: ProductPreviousValues
}

input ProductSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ProductWhereInput
  AND: [ProductSubscriptionWhereInput!]
}

input ProductUpdateDataInput {
  name: String
  description: String
  price: String
  quantity: String
  image: String
  category: CategoryUpdateOneWithoutProductsInput
  brand: BrandUpdateOneInput
}

input ProductUpdateInput {
  name: String
  description: String
  price: Float
  quantity: Int
  image: String
  category: CategoryUpdateOneWithoutProductsInput
  brand: BrandUpdateOneInput
}

input ProductUpdateManyDataInput {
  name: String
  description: String
  price: String
  quantity: String
  image: String
}

input ProductUpdateManyMutationInput {
  name: String
  description: String
  price: String
  quantity: String
  image: String
}

input ProductUpdateManyWithoutCategoryInput {
  create: [ProductCreateWithoutCategoryInput!]
  delete: [ProductWhereUniqueInput!]
  connect: [ProductWhereUniqueInput!]
  set: [ProductWhereUniqueInput!]
  disconnect: [ProductWhereUniqueInput!]
  update: [ProductUpdateWithWhereUniqueWithoutCategoryInput!]
  upsert: [ProductUpsertWithWhereUniqueWithoutCategoryInput!]
  deleteMany: [ProductScalarWhereInput!]
  updateMany: [ProductUpdateManyWithWhereNestedInput!]
}

input ProductUpdateManyWithWhereNestedInput {
  where: ProductScalarWhereInput!
  data: ProductUpdateManyDataInput!
}

input ProductUpdateOneInput {
  create: ProductCreateInput
  update: ProductUpdateDataInput
  upsert: ProductUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: ProductWhereUniqueInput
}

input ProductUpdateWithoutCategoryDataInput {
  name: String
  description: String
  price: String
  quantity: String
  image: String
  brand: BrandUpdateOneInput
}

input ProductUpdateWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput!
  data: ProductUpdateWithoutCategoryDataInput!
}

input ProductUpsertNestedInput {
  update: ProductUpdateDataInput!
  create: ProductCreateInput!
}

input ProductUpsertWithWhereUniqueWithoutCategoryInput {
  where: ProductWhereUniqueInput!
  update: ProductUpdateWithoutCategoryDataInput!
  create: ProductCreateWithoutCategoryInput!
}

input ProductWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  price: String
  price_not: String
  price_in: [String!]
  price_not_in: [String!]
  price_lt: String
  price_lte: String
  price_gt: String
  price_gte: String
  price_contains: String
  price_not_contains: String
  price_starts_with: String
  price_not_starts_with: String
  price_ends_with: String
  price_not_ends_with: String
  quantity: String
  quantity_not: String
  quantity_in: [String!]
  quantity_not_in: [String!]
  quantity_lt: String
  quantity_lte: String
  quantity_gt: String
  quantity_gte: String
  quantity_contains: String
  quantity_not_contains: String
  quantity_starts_with: String
  quantity_not_starts_with: String
  quantity_ends_with: String
  quantity_not_ends_with: String
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  category: CategoryWhereInput
  brand: BrandWhereInput
  AND: [ProductWhereInput!]
}

input ProductWhereUniqueInput {
  id: ID
}

type Query {
  brand(where: BrandWhereUniqueInput!): Brand
  brands(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Brand]!
  brandsConnection(where: BrandWhereInput, orderBy: BrandOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): BrandConnection!
  category(where: CategoryWhereUniqueInput!): Category
  categories(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Category]!
  categoriesConnection(where: CategoryWhereInput, orderBy: CategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): CategoryConnection!
  order(where: OrderWhereUniqueInput!): Order
  orders(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order]!
  ordersConnection(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderConnection!
  orderItem(where: OrderItemWhereUniqueInput!): OrderItem
  orderItems(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [OrderItem]!
  orderItemsConnection(where: OrderItemWhereInput, orderBy: OrderItemOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OrderItemConnection!
  product(where: ProductWhereUniqueInput!): Product
  products(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Product]!
  productsConnection(where: ProductWhereInput, orderBy: ProductOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ProductConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  brand(where: BrandSubscriptionWhereInput): BrandSubscriptionPayload
  category(where: CategorySubscriptionWhereInput): CategorySubscriptionPayload
  order(where: OrderSubscriptionWhereInput): OrderSubscriptionPayload
  orderItem(where: OrderItemSubscriptionWhereInput): OrderItemSubscriptionPayload
  product(where: ProductSubscriptionWhereInput): ProductSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  address: String
  typeOfAuth: String
  avatar: String
  role: String
  createdAt: String
  updatedAt: String
  order(where: OrderWhereInput, orderBy: OrderOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Order!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  address: String
  typeOfAuth: String
  avatar: String
  role: String
  createdAt: String
  updatedAt: String
  order: OrderCreateManyWithoutUserInput
}

input UserCreateOneWithoutOrderInput {
  create: UserCreateWithoutOrderInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutOrderInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  address: String
  typeOfAuth: String
  avatar: String
  role: String
  createdAt: String
  updatedAt: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  phone_ASC
  phone_DESC
  address_ASC
  address_DESC
  typeOfAuth_ASC
  typeOfAuth_DESC
  avatar_ASC
  avatar_DESC
  role_ASC
  role_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  address: String
  typeOfAuth: String
  avatar: String
  role: String
  createdAt: String
  updatedAt: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  address: String
  typeOfAuth: String
  avatar: String
  role: String
  createdAt: String
  updatedAt: String
  order: OrderUpdateManyWithoutUserInput
}

input UserUpdateManyMutationInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  address: String
  typeOfAuth: String
  avatar: String
  role: String
  createdAt: String
  updatedAt: String
}

input UserUpdateOneWithoutOrderInput {
  create: UserCreateWithoutOrderInput
  update: UserUpdateWithoutOrderDataInput
  upsert: UserUpsertWithoutOrderInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutOrderDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  phone: String
  address: String
  typeOfAuth: String
  avatar: String
  role: String
  createdAt: String
  updatedAt: String
}

input UserUpsertWithoutOrderInput {
  update: UserUpdateWithoutOrderDataInput!
  create: UserCreateWithoutOrderInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  phone: String
  phone_not: String
  phone_in: [String!]
  phone_not_in: [String!]
  phone_lt: String
  phone_lte: String
  phone_gt: String
  phone_gte: String
  phone_contains: String
  phone_not_contains: String
  phone_starts_with: String
  phone_not_starts_with: String
  phone_ends_with: String
  phone_not_ends_with: String
  address: String
  address_not: String
  address_in: [String!]
  address_not_in: [String!]
  address_lt: String
  address_lte: String
  address_gt: String
  address_gte: String
  address_contains: String
  address_not_contains: String
  address_starts_with: String
  address_not_starts_with: String
  address_ends_with: String
  address_not_ends_with: String
  typeOfAuth: String
  typeOfAuth_not: String
  typeOfAuth_in: [String!]
  typeOfAuth_not_in: [String!]
  typeOfAuth_lt: String
  typeOfAuth_lte: String
  typeOfAuth_gt: String
  typeOfAuth_gte: String
  typeOfAuth_contains: String
  typeOfAuth_not_contains: String
  typeOfAuth_starts_with: String
  typeOfAuth_not_starts_with: String
  typeOfAuth_ends_with: String
  typeOfAuth_not_ends_with: String
  avatar: String
  avatar_not: String
  avatar_in: [String!]
  avatar_not_in: [String!]
  avatar_lt: String
  avatar_lte: String
  avatar_gt: String
  avatar_gte: String
  avatar_contains: String
  avatar_not_contains: String
  avatar_starts_with: String
  avatar_not_starts_with: String
  avatar_ends_with: String
  avatar_not_ends_with: String
  role: String
  role_not: String
  role_in: [String!]
  role_not_in: [String!]
  role_lt: String
  role_lte: String
  role_gt: String
  role_gte: String
  role_contains: String
  role_not_contains: String
  role_starts_with: String
  role_not_starts_with: String
  role_ends_with: String
  role_not_ends_with: String
  createdAt: String
  createdAt_not: String
  createdAt_in: [String!]
  createdAt_not_in: [String!]
  createdAt_lt: String
  createdAt_lte: String
  createdAt_gt: String
  createdAt_gte: String
  createdAt_contains: String
  createdAt_not_contains: String
  createdAt_starts_with: String
  createdAt_not_starts_with: String
  createdAt_ends_with: String
  createdAt_not_ends_with: String
  updatedAt: String
  updatedAt_not: String
  updatedAt_in: [String!]
  updatedAt_not_in: [String!]
  updatedAt_lt: String
  updatedAt_lte: String
  updatedAt_gt: String
  updatedAt_gte: String
  updatedAt_contains: String
  updatedAt_not_contains: String
  updatedAt_starts_with: String
  updatedAt_not_starts_with: String
  updatedAt_ends_with: String
  updatedAt_not_ends_with: String
  order_some: OrderWhereInput
  AND: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

# Custom schema
type UserLogged {
  token: String!
  user: User
}

input loginInput {
  email: String!
  password: String!
  typeOfAuth: String
}

input PasswordInput{
  oldPassword: String
  newPassword: String
}`;

export default typeDefs;
