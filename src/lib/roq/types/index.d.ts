/**
 * Client
 **/

import * as runtime from './runtime/library';
import $Types = runtime.Types; // general types
import $Public = runtime.Types.Public;
import $Utils = runtime.Types.Utils;
import $Extensions = runtime.Types.Extensions;
import $Result = runtime.Types.Result;

export type PrismaPromise<T> = $Public.PrismaPromise<T>;

/**
 * Model appointment
 *
 */
export type appointment = $Result.DefaultSelection<Prisma.$appointmentPayload>;
/**
 * Model billing
 *
 */
export type billing = $Result.DefaultSelection<Prisma.$billingPayload>;
/**
 * Model clinic
 *
 */
export type clinic = $Result.DefaultSelection<Prisma.$clinicPayload>;
/**
 * Model insurance_provider
 *
 */
export type insurance_provider = $Result.DefaultSelection<Prisma.$insurance_providerPayload>;
/**
 * Model invoice
 *
 */
export type invoice = $Result.DefaultSelection<Prisma.$invoicePayload>;
/**
 * Model medical_record
 *
 */
export type medical_record = $Result.DefaultSelection<Prisma.$medical_recordPayload>;
/**
 * Model user
 *
 */
export type user = $Result.DefaultSelection<Prisma.$userPayload>;

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Appointments
 * const appointments = await prisma.appointment.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T
    ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition>
      ? Prisma.GetEvents<T['log']>
      : never
    : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] };

  /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(
    eventType: V,
    callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void,
  ): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void;

  /**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(
    arg: [...P],
    options?: { isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>;

  $transaction<R>(
    fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>,
    options?: { maxWait?: number; timeout?: number; isolationLevel?: Prisma.TransactionIsolationLevel },
  ): $Utils.JsPromise<R>;

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>;

  /**
   * `prisma.appointment`: Exposes CRUD operations for the **appointment** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Appointments
   * const appointments = await prisma.appointment.findMany()
   * ```
   */
  get appointment(): Prisma.appointmentDelegate<ExtArgs>;

  /**
   * `prisma.billing`: Exposes CRUD operations for the **billing** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Billings
   * const billings = await prisma.billing.findMany()
   * ```
   */
  get billing(): Prisma.billingDelegate<ExtArgs>;

  /**
   * `prisma.clinic`: Exposes CRUD operations for the **clinic** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Clinics
   * const clinics = await prisma.clinic.findMany()
   * ```
   */
  get clinic(): Prisma.clinicDelegate<ExtArgs>;

  /**
   * `prisma.insurance_provider`: Exposes CRUD operations for the **insurance_provider** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Insurance_providers
   * const insurance_providers = await prisma.insurance_provider.findMany()
   * ```
   */
  get insurance_provider(): Prisma.insurance_providerDelegate<ExtArgs>;

  /**
   * `prisma.invoice`: Exposes CRUD operations for the **invoice** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Invoices
   * const invoices = await prisma.invoice.findMany()
   * ```
   */
  get invoice(): Prisma.invoiceDelegate<ExtArgs>;

  /**
   * `prisma.medical_record`: Exposes CRUD operations for the **medical_record** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Medical_records
   * const medical_records = await prisma.medical_record.findMany()
   * ```
   */
  get medical_record(): Prisma.medical_recordDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **user** model.
   * Example usage:
   * ```ts
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   */
  get user(): Prisma.userDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF;

  export type PrismaPromise<T> = $Public.PrismaPromise<T>;

  /**
   * Validator
   */
  export import validator = runtime.Public.validator;

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError;
  export import PrismaClientValidationError = runtime.PrismaClientValidationError;
  export import NotFoundError = runtime.NotFoundError;

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag;
  export import empty = runtime.empty;
  export import join = runtime.join;
  export import raw = runtime.raw;
  export import Sql = runtime.Sql;

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal;

  export type DecimalJsLike = runtime.DecimalJsLike;

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics;
  export type Metric<T> = runtime.Metric<T>;
  export type MetricHistogram = runtime.MetricHistogram;
  export type MetricHistogramBucket = runtime.MetricHistogramBucket;

  /**
   * Extensions
   */
  export import Extension = $Extensions.UserArgs;
  export import getExtensionContext = runtime.Extensions.getExtensionContext;
  export import Args = $Public.Args;
  export import Payload = $Public.Payload;
  export import Result = $Public.Result;
  export import Exact = $Public.Exact;

  /**
   * Prisma Client JS version: 5.4.2
   * Query Engine version: ac9d7041ed77bcc8a8dbd2ab6616b39013829574
   */
  export type PrismaVersion = {
    client: string;
  };

  export const prismaVersion: PrismaVersion;

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from.
   */
  export type JsonObject = { [Key in string]?: JsonValue };

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null;

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = { readonly [Key in string]?: InputJsonValue | null };

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown };

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
     * Type of `Prisma.DbNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class DbNull {
      private DbNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.JsonNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class JsonNull {
      private JsonNull: never;
      private constructor();
    }

    /**
     * Type of `Prisma.AnyNull`.
     *
     * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
     *
     * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
     */
    class AnyNull {
      private AnyNull: never;
      private constructor();
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull;

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull;

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull;

  type SelectAndInclude = {
    select: any;
    include: any;
  };

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>;

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
  };

  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K;
  }[keyof T];

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K;
  };

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>;

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : {});

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  } & K;

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> = T extends object ? (U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U) : T;

  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
    ? False
    : T extends Date
    ? False
    : T extends Uint8Array
    ? False
    : T extends BigInt
    ? False
    : T extends object
    ? True
    : False;

  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O>; // With K possibilities
    }[K];

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;

  type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
  }[strict];

  type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown
    ? _Either<O, K, strict>
    : never;

  export type Union = any;

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
  } & {};

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void
    ? I
    : never;

  export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<
    Overwrite<
      U,
      {
        [K in keyof U]-?: At<U, K>;
      }
    >
  >;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function
    ? A
    : {
        [K in keyof A]: A[K];
      } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
      ? (K extends keyof O ? { [P in K]: O[P] } & O : O) | ({ [P in keyof O as P extends K ? K : never]-?: O[P] } & O)
      : never
  >;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False;

  // /**
  // 1
  // */
  export type True = 1;

  /**
  0
  */
  export type False = 0;

  export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
  }[B];

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0;

  export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0;
      1: 1;
    };
    1: {
      0: 1;
      1: 1;
    };
  }[B1][B2];

  export type Keys<U extends Union> = U extends unknown ? keyof U : never;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object
    ? {
        [P in keyof T]: P extends keyof O ? O[P] : never;
      }
    : never;

  type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;

  type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K;
  }[keyof T];

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;

  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;

  export const ModelName: {
    appointment: 'appointment';
    billing: 'billing';
    clinic: 'clinic';
    insurance_provider: 'insurance_provider';
    invoice: 'invoice';
    medical_record: 'medical_record';
    user: 'user';
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName];

  export type Datasources = {
    db?: Datasource;
  };

  interface TypeMapCb extends $Utils.Fn<{ extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>;
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'appointment' | 'billing' | 'clinic' | 'insurance_provider' | 'invoice' | 'medical_record' | 'user';
      txIsolationLevel: Prisma.TransactionIsolationLevel;
    };
    model: {
      appointment: {
        payload: Prisma.$appointmentPayload<ExtArgs>;
        fields: Prisma.appointmentFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.appointmentFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.appointmentFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findFirst: {
            args: Prisma.appointmentFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.appointmentFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          findMany: {
            args: Prisma.appointmentFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>[];
          };
          create: {
            args: Prisma.appointmentCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          createMany: {
            args: Prisma.appointmentCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.appointmentDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          update: {
            args: Prisma.appointmentUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          deleteMany: {
            args: Prisma.appointmentDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.appointmentUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.appointmentUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$appointmentPayload>;
          };
          aggregate: {
            args: Prisma.AppointmentAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateAppointment>;
          };
          groupBy: {
            args: Prisma.appointmentGroupByArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentGroupByOutputType>[];
          };
          count: {
            args: Prisma.appointmentCountArgs<ExtArgs>;
            result: $Utils.Optional<AppointmentCountAggregateOutputType> | number;
          };
        };
      };
      billing: {
        payload: Prisma.$billingPayload<ExtArgs>;
        fields: Prisma.billingFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.billingFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$billingPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.billingFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$billingPayload>;
          };
          findFirst: {
            args: Prisma.billingFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$billingPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.billingFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$billingPayload>;
          };
          findMany: {
            args: Prisma.billingFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$billingPayload>[];
          };
          create: {
            args: Prisma.billingCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$billingPayload>;
          };
          createMany: {
            args: Prisma.billingCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.billingDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$billingPayload>;
          };
          update: {
            args: Prisma.billingUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$billingPayload>;
          };
          deleteMany: {
            args: Prisma.billingDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.billingUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.billingUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$billingPayload>;
          };
          aggregate: {
            args: Prisma.BillingAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateBilling>;
          };
          groupBy: {
            args: Prisma.billingGroupByArgs<ExtArgs>;
            result: $Utils.Optional<BillingGroupByOutputType>[];
          };
          count: {
            args: Prisma.billingCountArgs<ExtArgs>;
            result: $Utils.Optional<BillingCountAggregateOutputType> | number;
          };
        };
      };
      clinic: {
        payload: Prisma.$clinicPayload<ExtArgs>;
        fields: Prisma.clinicFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.clinicFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.clinicFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          findFirst: {
            args: Prisma.clinicFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.clinicFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          findMany: {
            args: Prisma.clinicFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>[];
          };
          create: {
            args: Prisma.clinicCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          createMany: {
            args: Prisma.clinicCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.clinicDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          update: {
            args: Prisma.clinicUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          deleteMany: {
            args: Prisma.clinicDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.clinicUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.clinicUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$clinicPayload>;
          };
          aggregate: {
            args: Prisma.ClinicAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateClinic>;
          };
          groupBy: {
            args: Prisma.clinicGroupByArgs<ExtArgs>;
            result: $Utils.Optional<ClinicGroupByOutputType>[];
          };
          count: {
            args: Prisma.clinicCountArgs<ExtArgs>;
            result: $Utils.Optional<ClinicCountAggregateOutputType> | number;
          };
        };
      };
      insurance_provider: {
        payload: Prisma.$insurance_providerPayload<ExtArgs>;
        fields: Prisma.insurance_providerFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.insurance_providerFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.insurance_providerFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          findFirst: {
            args: Prisma.insurance_providerFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.insurance_providerFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          findMany: {
            args: Prisma.insurance_providerFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>[];
          };
          create: {
            args: Prisma.insurance_providerCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          createMany: {
            args: Prisma.insurance_providerCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.insurance_providerDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          update: {
            args: Prisma.insurance_providerUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          deleteMany: {
            args: Prisma.insurance_providerDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.insurance_providerUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.insurance_providerUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$insurance_providerPayload>;
          };
          aggregate: {
            args: Prisma.Insurance_providerAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInsurance_provider>;
          };
          groupBy: {
            args: Prisma.insurance_providerGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Insurance_providerGroupByOutputType>[];
          };
          count: {
            args: Prisma.insurance_providerCountArgs<ExtArgs>;
            result: $Utils.Optional<Insurance_providerCountAggregateOutputType> | number;
          };
        };
      };
      invoice: {
        payload: Prisma.$invoicePayload<ExtArgs>;
        fields: Prisma.invoiceFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.invoiceFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.invoiceFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          findFirst: {
            args: Prisma.invoiceFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.invoiceFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          findMany: {
            args: Prisma.invoiceFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>[];
          };
          create: {
            args: Prisma.invoiceCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          createMany: {
            args: Prisma.invoiceCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.invoiceDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          update: {
            args: Prisma.invoiceUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          deleteMany: {
            args: Prisma.invoiceDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.invoiceUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.invoiceUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$invoicePayload>;
          };
          aggregate: {
            args: Prisma.InvoiceAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateInvoice>;
          };
          groupBy: {
            args: Prisma.invoiceGroupByArgs<ExtArgs>;
            result: $Utils.Optional<InvoiceGroupByOutputType>[];
          };
          count: {
            args: Prisma.invoiceCountArgs<ExtArgs>;
            result: $Utils.Optional<InvoiceCountAggregateOutputType> | number;
          };
        };
      };
      medical_record: {
        payload: Prisma.$medical_recordPayload<ExtArgs>;
        fields: Prisma.medical_recordFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.medical_recordFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.medical_recordFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          findFirst: {
            args: Prisma.medical_recordFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.medical_recordFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          findMany: {
            args: Prisma.medical_recordFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>[];
          };
          create: {
            args: Prisma.medical_recordCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          createMany: {
            args: Prisma.medical_recordCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.medical_recordDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          update: {
            args: Prisma.medical_recordUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          deleteMany: {
            args: Prisma.medical_recordDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.medical_recordUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.medical_recordUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$medical_recordPayload>;
          };
          aggregate: {
            args: Prisma.Medical_recordAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateMedical_record>;
          };
          groupBy: {
            args: Prisma.medical_recordGroupByArgs<ExtArgs>;
            result: $Utils.Optional<Medical_recordGroupByOutputType>[];
          };
          count: {
            args: Prisma.medical_recordCountArgs<ExtArgs>;
            result: $Utils.Optional<Medical_recordCountAggregateOutputType> | number;
          };
        };
      };
      user: {
        payload: Prisma.$userPayload<ExtArgs>;
        fields: Prisma.userFieldRefs;
        operations: {
          findUnique: {
            args: Prisma.userFindUniqueArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findUniqueOrThrow: {
            args: Prisma.userFindUniqueOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findFirst: {
            args: Prisma.userFindFirstArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload> | null;
          };
          findFirstOrThrow: {
            args: Prisma.userFindFirstOrThrowArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          findMany: {
            args: Prisma.userFindManyArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>[];
          };
          create: {
            args: Prisma.userCreateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          createMany: {
            args: Prisma.userCreateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          delete: {
            args: Prisma.userDeleteArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          update: {
            args: Prisma.userUpdateArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          deleteMany: {
            args: Prisma.userDeleteManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          updateMany: {
            args: Prisma.userUpdateManyArgs<ExtArgs>;
            result: Prisma.BatchPayload;
          };
          upsert: {
            args: Prisma.userUpsertArgs<ExtArgs>;
            result: $Utils.PayloadToResult<Prisma.$userPayload>;
          };
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>;
            result: $Utils.Optional<AggregateUser>;
          };
          groupBy: {
            args: Prisma.userGroupByArgs<ExtArgs>;
            result: $Utils.Optional<UserGroupByOutputType>[];
          };
          count: {
            args: Prisma.userCountArgs<ExtArgs>;
            result: $Utils.Optional<UserCountAggregateOutputType> | number;
          };
        };
      };
    };
  } & {
    other: {
      payload: any;
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]];
          result: any;
        };
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]];
          result: any;
        };
      };
    };
  };
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>;
  export type DefaultPrismaClient = PrismaClient;
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources;
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string;
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat;
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     *
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[];
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error';
  export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
  };

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition
    ? T['emit'] extends 'event'
      ? T['level']
      : never
    : never;
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never;

  export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
  };

  export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
  };
  /* End Types for Logging */

  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy';

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName;
    action: PrismaAction;
    args: any;
    dataPath: string[];
    runInTransaction: boolean;
  };

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>;

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>;

  export type Datasource = {
    url?: string;
  };

  /**
   * Count Types
   */

  /**
   * Count Type AppointmentCountOutputType
   */

  export type AppointmentCountOutputType = {
    billing: number;
    medical_record: number;
  };

  export type AppointmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billing?: boolean | AppointmentCountOutputTypeCountBillingArgs;
    medical_record?: boolean | AppointmentCountOutputTypeCountMedical_recordArgs;
  };

  // Custom InputTypes

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the AppointmentCountOutputType
     */
    select?: AppointmentCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountBillingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: billingWhereInput;
  };

  /**
   * AppointmentCountOutputType without action
   */
  export type AppointmentCountOutputTypeCountMedical_recordArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_recordWhereInput;
  };

  /**
   * Count Type ClinicCountOutputType
   */

  export type ClinicCountOutputType = {
    appointment: number;
  };

  export type ClinicCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | ClinicCountOutputTypeCountAppointmentArgs;
  };

  // Custom InputTypes

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClinicCountOutputType
     */
    select?: ClinicCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * ClinicCountOutputType without action
   */
  export type ClinicCountOutputTypeCountAppointmentArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * Count Type Insurance_providerCountOutputType
   */

  export type Insurance_providerCountOutputType = {
    billing: number;
  };

  export type Insurance_providerCountOutputTypeSelect<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    billing?: boolean | Insurance_providerCountOutputTypeCountBillingArgs;
  };

  // Custom InputTypes

  /**
   * Insurance_providerCountOutputType without action
   */
  export type Insurance_providerCountOutputTypeDefaultArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the Insurance_providerCountOutputType
     */
    select?: Insurance_providerCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * Insurance_providerCountOutputType without action
   */
  export type Insurance_providerCountOutputTypeCountBillingArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: billingWhereInput;
  };

  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    appointment_appointment_healthcare_provider_idTouser: number;
    appointment_appointment_patient_idTouser: number;
    billing: number;
    clinic: number;
    insurance_provider: number;
    invoice: number;
    medical_record: number;
  };

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment_appointment_healthcare_provider_idTouser?:
      | boolean
      | UserCountOutputTypeCountAppointment_appointment_healthcare_provider_idTouserArgs;
    appointment_appointment_patient_idTouser?:
      | boolean
      | UserCountOutputTypeCountAppointment_appointment_patient_idTouserArgs;
    billing?: boolean | UserCountOutputTypeCountBillingArgs;
    clinic?: boolean | UserCountOutputTypeCountClinicArgs;
    insurance_provider?: boolean | UserCountOutputTypeCountInsurance_providerArgs;
    invoice?: boolean | UserCountOutputTypeCountInvoiceArgs;
    medical_record?: boolean | UserCountOutputTypeCountMedical_recordArgs;
  };

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointment_appointment_healthcare_provider_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAppointment_appointment_patient_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: appointmentWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountBillingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: billingWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountClinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinicWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInsurance_providerArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: insurance_providerWhereInput;
  };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      where?: invoiceWhereInput;
    };

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMedical_recordArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    where?: medical_recordWhereInput;
  };

  /**
   * Models
   */

  /**
   * Model appointment
   */

  export type AggregateAppointment = {
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  export type AppointmentMinAggregateOutputType = {
    id: string | null;
    appointment_date: Date | null;
    appointment_time: string | null;
    status: string | null;
    patient_id: string | null;
    clinic_id: string | null;
    healthcare_provider_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentMaxAggregateOutputType = {
    id: string | null;
    appointment_date: Date | null;
    appointment_time: string | null;
    status: string | null;
    patient_id: string | null;
    clinic_id: string | null;
    healthcare_provider_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type AppointmentCountAggregateOutputType = {
    id: number;
    appointment_date: number;
    appointment_time: number;
    status: number;
    patient_id: number;
    clinic_id: number;
    healthcare_provider_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type AppointmentMinAggregateInputType = {
    id?: true;
    appointment_date?: true;
    appointment_time?: true;
    status?: true;
    patient_id?: true;
    clinic_id?: true;
    healthcare_provider_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentMaxAggregateInputType = {
    id?: true;
    appointment_date?: true;
    appointment_time?: true;
    status?: true;
    patient_id?: true;
    clinic_id?: true;
    healthcare_provider_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type AppointmentCountAggregateInputType = {
    id?: true;
    appointment_date?: true;
    appointment_time?: true;
    status?: true;
    patient_id?: true;
    clinic_id?: true;
    healthcare_provider_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type AppointmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointment to aggregate.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned appointments
     **/
    _count?: true | AppointmentCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: AppointmentMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: AppointmentMaxAggregateInputType;
  };

  export type GetAppointmentAggregateType<T extends AppointmentAggregateArgs> = {
    [P in keyof T & keyof AggregateAppointment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAppointment[P]>
      : GetScalarType<T[P], AggregateAppointment[P]>;
  };

  export type appointmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithAggregationInput | appointmentOrderByWithAggregationInput[];
    by: AppointmentScalarFieldEnum[] | AppointmentScalarFieldEnum;
    having?: appointmentScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AppointmentCountAggregateInputType | true;
    _min?: AppointmentMinAggregateInputType;
    _max?: AppointmentMaxAggregateInputType;
  };

  export type AppointmentGroupByOutputType = {
    id: string;
    appointment_date: Date;
    appointment_time: string;
    status: string;
    patient_id: string;
    clinic_id: string;
    healthcare_provider_id: string;
    created_at: Date;
    updated_at: Date;
    _count: AppointmentCountAggregateOutputType | null;
    _min: AppointmentMinAggregateOutputType | null;
    _max: AppointmentMaxAggregateOutputType | null;
  };

  type GetAppointmentGroupByPayload<T extends appointmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AppointmentGroupByOutputType, T['by']> & {
        [P in keyof T & keyof AppointmentGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], AppointmentGroupByOutputType[P]>
          : GetScalarType<T[P], AppointmentGroupByOutputType[P]>;
      }
    >
  >;

  export type appointmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        appointment_date?: boolean;
        appointment_time?: boolean;
        status?: boolean;
        patient_id?: boolean;
        clinic_id?: boolean;
        healthcare_provider_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        clinic?: boolean | clinicDefaultArgs<ExtArgs>;
        user_appointment_healthcare_provider_idTouser?: boolean | userDefaultArgs<ExtArgs>;
        user_appointment_patient_idTouser?: boolean | userDefaultArgs<ExtArgs>;
        billing?: boolean | appointment$billingArgs<ExtArgs>;
        medical_record?: boolean | appointment$medical_recordArgs<ExtArgs>;
        _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['appointment']
    >;

  export type appointmentSelectScalar = {
    id?: boolean;
    appointment_date?: boolean;
    appointment_time?: boolean;
    status?: boolean;
    patient_id?: boolean;
    clinic_id?: boolean;
    healthcare_provider_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type appointmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clinic?: boolean | clinicDefaultArgs<ExtArgs>;
    user_appointment_healthcare_provider_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    user_appointment_patient_idTouser?: boolean | userDefaultArgs<ExtArgs>;
    billing?: boolean | appointment$billingArgs<ExtArgs>;
    medical_record?: boolean | appointment$medical_recordArgs<ExtArgs>;
    _count?: boolean | AppointmentCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $appointmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'appointment';
    objects: {
      clinic: Prisma.$clinicPayload<ExtArgs>;
      user_appointment_healthcare_provider_idTouser: Prisma.$userPayload<ExtArgs>;
      user_appointment_patient_idTouser: Prisma.$userPayload<ExtArgs>;
      billing: Prisma.$billingPayload<ExtArgs>[];
      medical_record: Prisma.$medical_recordPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        appointment_date: Date;
        appointment_time: string;
        status: string;
        patient_id: string;
        clinic_id: string;
        healthcare_provider_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['appointment']
    >;
    composites: {};
  };

  type appointmentGetPayload<S extends boolean | null | undefined | appointmentDefaultArgs> = $Result.GetResult<
    Prisma.$appointmentPayload,
    S
  >;

  type appointmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    appointmentFindManyArgs,
    'select' | 'include'
  > & {
    select?: AppointmentCountAggregateInputType | true;
  };

  export interface appointmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['appointment']; meta: { name: 'appointment' } };
    /**
     * Find zero or one Appointment that matches the filter.
     * @param {appointmentFindUniqueArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends appointmentFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentFindUniqueArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Appointment that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {appointmentFindUniqueOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends appointmentFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends appointmentFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Appointment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindFirstOrThrowArgs} args - Arguments to find a Appointment
     * @example
     * // Get one Appointment
     * const appointment = await prisma.appointment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends appointmentFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Appointments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Appointments
     * const appointments = await prisma.appointment.findMany()
     *
     * // Get first 10 Appointments
     * const appointments = await prisma.appointment.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const appointmentWithIdOnly = await prisma.appointment.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends appointmentFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Appointment.
     * @param {appointmentCreateArgs} args - Arguments to create a Appointment.
     * @example
     * // Create one Appointment
     * const Appointment = await prisma.appointment.create({
     *   data: {
     *     // ... data to create a Appointment
     *   }
     * })
     *
     **/
    create<T extends appointmentCreateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentCreateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Appointments.
     *     @param {appointmentCreateManyArgs} args - Arguments to create many Appointments.
     *     @example
     *     // Create many Appointments
     *     const appointment = await prisma.appointment.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends appointmentCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Appointment.
     * @param {appointmentDeleteArgs} args - Arguments to delete one Appointment.
     * @example
     * // Delete one Appointment
     * const Appointment = await prisma.appointment.delete({
     *   where: {
     *     // ... filter to delete one Appointment
     *   }
     * })
     *
     **/
    delete<T extends appointmentDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentDeleteArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Appointment.
     * @param {appointmentUpdateArgs} args - Arguments to update one Appointment.
     * @example
     * // Update one Appointment
     * const appointment = await prisma.appointment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends appointmentUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Appointments.
     * @param {appointmentDeleteManyArgs} args - Arguments to filter Appointments to delete.
     * @example
     * // Delete a few Appointments
     * const { count } = await prisma.appointment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends appointmentDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, appointmentDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Appointments
     * const appointment = await prisma.appointment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends appointmentUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Appointment.
     * @param {appointmentUpsertArgs} args - Arguments to update or create a Appointment.
     * @example
     * // Update or create a Appointment
     * const appointment = await prisma.appointment.upsert({
     *   create: {
     *     // ... data to create a Appointment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Appointment we want to update
     *   }
     * })
     **/
    upsert<T extends appointmentUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, appointmentUpsertArgs<ExtArgs>>,
    ): Prisma__appointmentClient<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Appointments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentCountArgs} args - Arguments to filter Appointments to count.
     * @example
     * // Count the number of Appointments
     * const count = await prisma.appointment.count({
     *   where: {
     *     // ... the filter for the Appointments we want to count
     *   }
     * })
     **/
    count<T extends appointmentCountArgs>(
      args?: Subset<T, appointmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AppointmentCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AppointmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends AppointmentAggregateArgs>(
      args: Subset<T, AppointmentAggregateArgs>,
    ): Prisma.PrismaPromise<GetAppointmentAggregateType<T>>;

    /**
     * Group by Appointment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {appointmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends appointmentGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: appointmentGroupByArgs['orderBy'] }
        : { orderBy?: appointmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, appointmentGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetAppointmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the appointment model
     */
    readonly fields: appointmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for appointment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__appointmentClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    clinic<T extends clinicDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, clinicDefaultArgs<ExtArgs>>,
    ): Prisma__clinicClient<
      $Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_appointment_healthcare_provider_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user_appointment_patient_idTouser<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    billing<T extends appointment$billingArgs<ExtArgs> = {}>(
      args?: Subset<T, appointment$billingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'findMany'> | Null>;

    medical_record<T extends appointment$medical_recordArgs<ExtArgs> = {}>(
      args?: Subset<T, appointment$medical_recordArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the appointment model
   */
  interface appointmentFieldRefs {
    readonly id: FieldRef<'appointment', 'String'>;
    readonly appointment_date: FieldRef<'appointment', 'DateTime'>;
    readonly appointment_time: FieldRef<'appointment', 'String'>;
    readonly status: FieldRef<'appointment', 'String'>;
    readonly patient_id: FieldRef<'appointment', 'String'>;
    readonly clinic_id: FieldRef<'appointment', 'String'>;
    readonly healthcare_provider_id: FieldRef<'appointment', 'String'>;
    readonly created_at: FieldRef<'appointment', 'DateTime'>;
    readonly updated_at: FieldRef<'appointment', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * appointment findUnique
   */
  export type appointmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findUniqueOrThrow
   */
  export type appointmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment findFirst
   */
  export type appointmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findFirstOrThrow
   */
  export type appointmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointment to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of appointments.
     */
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment findMany
   */
  export type appointmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter, which appointments to fetch.
     */
    where?: appointmentWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of appointments to fetch.
     */
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing appointments.
     */
    cursor?: appointmentWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` appointments from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` appointments.
     */
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * appointment create
   */
  export type appointmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to create a appointment.
     */
    data: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
  };

  /**
   * appointment createMany
   */
  export type appointmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many appointments.
     */
    data: appointmentCreateManyInput | appointmentCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * appointment update
   */
  export type appointmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The data needed to update a appointment.
     */
    data: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
    /**
     * Choose, which appointment to update.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment updateMany
   */
  export type appointmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update appointments.
     */
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyInput>;
    /**
     * Filter which appointments to update
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment upsert
   */
  export type appointmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * The filter to search for the appointment to update in case it exists.
     */
    where: appointmentWhereUniqueInput;
    /**
     * In case the appointment found by the `where` argument doesn't exist, create a new appointment with this data.
     */
    create: XOR<appointmentCreateInput, appointmentUncheckedCreateInput>;
    /**
     * In case the appointment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<appointmentUpdateInput, appointmentUncheckedUpdateInput>;
  };

  /**
   * appointment delete
   */
  export type appointmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    /**
     * Filter which appointment to delete.
     */
    where: appointmentWhereUniqueInput;
  };

  /**
   * appointment deleteMany
   */
  export type appointmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which appointments to delete
     */
    where?: appointmentWhereInput;
  };

  /**
   * appointment.billing
   */
  export type appointment$billingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    where?: billingWhereInput;
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[];
    cursor?: billingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[];
  };

  /**
   * appointment.medical_record
   */
  export type appointment$medical_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    where?: medical_recordWhereInput;
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    cursor?: medical_recordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * appointment without action
   */
  export type appointmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
  };

  /**
   * Model billing
   */

  export type AggregateBilling = {
    _count: BillingCountAggregateOutputType | null;
    _avg: BillingAvgAggregateOutputType | null;
    _sum: BillingSumAggregateOutputType | null;
    _min: BillingMinAggregateOutputType | null;
    _max: BillingMaxAggregateOutputType | null;
  };

  export type BillingAvgAggregateOutputType = {
    total_amount: number | null;
  };

  export type BillingSumAggregateOutputType = {
    total_amount: number | null;
  };

  export type BillingMinAggregateOutputType = {
    id: string | null;
    billing_date: Date | null;
    total_amount: number | null;
    status: string | null;
    appointment_id: string | null;
    patient_id: string | null;
    insurance_provider_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BillingMaxAggregateOutputType = {
    id: string | null;
    billing_date: Date | null;
    total_amount: number | null;
    status: string | null;
    appointment_id: string | null;
    patient_id: string | null;
    insurance_provider_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type BillingCountAggregateOutputType = {
    id: number;
    billing_date: number;
    total_amount: number;
    status: number;
    appointment_id: number;
    patient_id: number;
    insurance_provider_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type BillingAvgAggregateInputType = {
    total_amount?: true;
  };

  export type BillingSumAggregateInputType = {
    total_amount?: true;
  };

  export type BillingMinAggregateInputType = {
    id?: true;
    billing_date?: true;
    total_amount?: true;
    status?: true;
    appointment_id?: true;
    patient_id?: true;
    insurance_provider_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BillingMaxAggregateInputType = {
    id?: true;
    billing_date?: true;
    total_amount?: true;
    status?: true;
    appointment_id?: true;
    patient_id?: true;
    insurance_provider_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type BillingCountAggregateInputType = {
    id?: true;
    billing_date?: true;
    total_amount?: true;
    status?: true;
    appointment_id?: true;
    patient_id?: true;
    insurance_provider_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type BillingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which billing to aggregate.
     */
    where?: billingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of billings to fetch.
     */
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: billingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` billings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` billings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned billings
     **/
    _count?: true | BillingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
     **/
    _avg?: BillingAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
     **/
    _sum?: BillingSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: BillingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: BillingMaxAggregateInputType;
  };

  export type GetBillingAggregateType<T extends BillingAggregateArgs> = {
    [P in keyof T & keyof AggregateBilling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBilling[P]>
      : GetScalarType<T[P], AggregateBilling[P]>;
  };

  export type billingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: billingWhereInput;
    orderBy?: billingOrderByWithAggregationInput | billingOrderByWithAggregationInput[];
    by: BillingScalarFieldEnum[] | BillingScalarFieldEnum;
    having?: billingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BillingCountAggregateInputType | true;
    _avg?: BillingAvgAggregateInputType;
    _sum?: BillingSumAggregateInputType;
    _min?: BillingMinAggregateInputType;
    _max?: BillingMaxAggregateInputType;
  };

  export type BillingGroupByOutputType = {
    id: string;
    billing_date: Date;
    total_amount: number;
    status: string;
    appointment_id: string;
    patient_id: string;
    insurance_provider_id: string;
    created_at: Date;
    updated_at: Date;
    _count: BillingCountAggregateOutputType | null;
    _avg: BillingAvgAggregateOutputType | null;
    _sum: BillingSumAggregateOutputType | null;
    _min: BillingMinAggregateOutputType | null;
    _max: BillingMaxAggregateOutputType | null;
  };

  type GetBillingGroupByPayload<T extends billingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BillingGroupByOutputType, T['by']> & {
        [P in keyof T & keyof BillingGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], BillingGroupByOutputType[P]>
          : GetScalarType<T[P], BillingGroupByOutputType[P]>;
      }
    >
  >;

  export type billingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      billing_date?: boolean;
      total_amount?: boolean;
      status?: boolean;
      appointment_id?: boolean;
      patient_id?: boolean;
      insurance_provider_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment?: boolean | appointmentDefaultArgs<ExtArgs>;
      insurance_provider?: boolean | insurance_providerDefaultArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['billing']
  >;

  export type billingSelectScalar = {
    id?: boolean;
    billing_date?: boolean;
    total_amount?: boolean;
    status?: boolean;
    appointment_id?: boolean;
    patient_id?: boolean;
    insurance_provider_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type billingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | appointmentDefaultArgs<ExtArgs>;
    insurance_provider?: boolean | insurance_providerDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $billingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'billing';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>;
      insurance_provider: Prisma.$insurance_providerPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        billing_date: Date;
        total_amount: number;
        status: string;
        appointment_id: string;
        patient_id: string;
        insurance_provider_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['billing']
    >;
    composites: {};
  };

  type billingGetPayload<S extends boolean | null | undefined | billingDefaultArgs> = $Result.GetResult<
    Prisma.$billingPayload,
    S
  >;

  type billingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    billingFindManyArgs,
    'select' | 'include'
  > & {
    select?: BillingCountAggregateInputType | true;
  };

  export interface billingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['billing']; meta: { name: 'billing' } };
    /**
     * Find zero or one Billing that matches the filter.
     * @param {billingFindUniqueArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends billingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, billingFindUniqueArgs<ExtArgs>>,
    ): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Billing that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {billingFindUniqueOrThrowArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends billingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, billingFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__billingClient<
      $Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Billing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingFindFirstArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends billingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, billingFindFirstArgs<ExtArgs>>,
    ): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Billing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingFindFirstOrThrowArgs} args - Arguments to find a Billing
     * @example
     * // Get one Billing
     * const billing = await prisma.billing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends billingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, billingFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Billings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Billings
     * const billings = await prisma.billing.findMany()
     *
     * // Get first 10 Billings
     * const billings = await prisma.billing.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const billingWithIdOnly = await prisma.billing.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends billingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, billingFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Billing.
     * @param {billingCreateArgs} args - Arguments to create a Billing.
     * @example
     * // Create one Billing
     * const Billing = await prisma.billing.create({
     *   data: {
     *     // ... data to create a Billing
     *   }
     * })
     *
     **/
    create<T extends billingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, billingCreateArgs<ExtArgs>>,
    ): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Billings.
     *     @param {billingCreateManyArgs} args - Arguments to create many Billings.
     *     @example
     *     // Create many Billings
     *     const billing = await prisma.billing.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends billingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, billingCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Billing.
     * @param {billingDeleteArgs} args - Arguments to delete one Billing.
     * @example
     * // Delete one Billing
     * const Billing = await prisma.billing.delete({
     *   where: {
     *     // ... filter to delete one Billing
     *   }
     * })
     *
     **/
    delete<T extends billingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, billingDeleteArgs<ExtArgs>>,
    ): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Billing.
     * @param {billingUpdateArgs} args - Arguments to update one Billing.
     * @example
     * // Update one Billing
     * const billing = await prisma.billing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends billingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, billingUpdateArgs<ExtArgs>>,
    ): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Billings.
     * @param {billingDeleteManyArgs} args - Arguments to filter Billings to delete.
     * @example
     * // Delete a few Billings
     * const { count } = await prisma.billing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends billingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, billingDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Billings
     * const billing = await prisma.billing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends billingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, billingUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Billing.
     * @param {billingUpsertArgs} args - Arguments to update or create a Billing.
     * @example
     * // Update or create a Billing
     * const billing = await prisma.billing.upsert({
     *   create: {
     *     // ... data to create a Billing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Billing we want to update
     *   }
     * })
     **/
    upsert<T extends billingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, billingUpsertArgs<ExtArgs>>,
    ): Prisma__billingClient<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Billings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingCountArgs} args - Arguments to filter Billings to count.
     * @example
     * // Count the number of Billings
     * const count = await prisma.billing.count({
     *   where: {
     *     // ... the filter for the Billings we want to count
     *   }
     * })
     **/
    count<T extends billingCountArgs>(
      args?: Subset<T, billingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BillingCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Billing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BillingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends BillingAggregateArgs>(
      args: Subset<T, BillingAggregateArgs>,
    ): Prisma.PrismaPromise<GetBillingAggregateType<T>>;

    /**
     * Group by Billing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {billingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends billingGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: billingGroupByArgs['orderBy'] }
        : { orderBy?: billingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, billingGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetBillingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the billing model
     */
    readonly fields: billingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for billing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__billingClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends appointmentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, appointmentDefaultArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    insurance_provider<T extends insurance_providerDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, insurance_providerDefaultArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the billing model
   */
  interface billingFieldRefs {
    readonly id: FieldRef<'billing', 'String'>;
    readonly billing_date: FieldRef<'billing', 'DateTime'>;
    readonly total_amount: FieldRef<'billing', 'Int'>;
    readonly status: FieldRef<'billing', 'String'>;
    readonly appointment_id: FieldRef<'billing', 'String'>;
    readonly patient_id: FieldRef<'billing', 'String'>;
    readonly insurance_provider_id: FieldRef<'billing', 'String'>;
    readonly created_at: FieldRef<'billing', 'DateTime'>;
    readonly updated_at: FieldRef<'billing', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * billing findUnique
   */
  export type billingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    /**
     * Filter, which billing to fetch.
     */
    where: billingWhereUniqueInput;
  };

  /**
   * billing findUniqueOrThrow
   */
  export type billingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    /**
     * Filter, which billing to fetch.
     */
    where: billingWhereUniqueInput;
  };

  /**
   * billing findFirst
   */
  export type billingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    /**
     * Filter, which billing to fetch.
     */
    where?: billingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of billings to fetch.
     */
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for billings.
     */
    cursor?: billingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` billings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` billings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of billings.
     */
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[];
  };

  /**
   * billing findFirstOrThrow
   */
  export type billingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    /**
     * Filter, which billing to fetch.
     */
    where?: billingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of billings to fetch.
     */
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for billings.
     */
    cursor?: billingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` billings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` billings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of billings.
     */
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[];
  };

  /**
   * billing findMany
   */
  export type billingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    /**
     * Filter, which billings to fetch.
     */
    where?: billingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of billings to fetch.
     */
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing billings.
     */
    cursor?: billingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` billings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` billings.
     */
    skip?: number;
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[];
  };

  /**
   * billing create
   */
  export type billingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    /**
     * The data needed to create a billing.
     */
    data: XOR<billingCreateInput, billingUncheckedCreateInput>;
  };

  /**
   * billing createMany
   */
  export type billingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many billings.
     */
    data: billingCreateManyInput | billingCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * billing update
   */
  export type billingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    /**
     * The data needed to update a billing.
     */
    data: XOR<billingUpdateInput, billingUncheckedUpdateInput>;
    /**
     * Choose, which billing to update.
     */
    where: billingWhereUniqueInput;
  };

  /**
   * billing updateMany
   */
  export type billingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update billings.
     */
    data: XOR<billingUpdateManyMutationInput, billingUncheckedUpdateManyInput>;
    /**
     * Filter which billings to update
     */
    where?: billingWhereInput;
  };

  /**
   * billing upsert
   */
  export type billingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    /**
     * The filter to search for the billing to update in case it exists.
     */
    where: billingWhereUniqueInput;
    /**
     * In case the billing found by the `where` argument doesn't exist, create a new billing with this data.
     */
    create: XOR<billingCreateInput, billingUncheckedCreateInput>;
    /**
     * In case the billing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<billingUpdateInput, billingUncheckedUpdateInput>;
  };

  /**
   * billing delete
   */
  export type billingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    /**
     * Filter which billing to delete.
     */
    where: billingWhereUniqueInput;
  };

  /**
   * billing deleteMany
   */
  export type billingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which billings to delete
     */
    where?: billingWhereInput;
  };

  /**
   * billing without action
   */
  export type billingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
  };

  /**
   * Model clinic
   */

  export type AggregateClinic = {
    _count: ClinicCountAggregateOutputType | null;
    _min: ClinicMinAggregateOutputType | null;
    _max: ClinicMaxAggregateOutputType | null;
  };

  export type ClinicMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ClinicMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    location: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string | null;
    created_at: Date | null;
    updated_at: Date | null;
    user_id: string | null;
    tenant_id: string | null;
  };

  export type ClinicCountAggregateOutputType = {
    id: number;
    description: number;
    location: number;
    opening_hours: number;
    closing_hours: number;
    name: number;
    created_at: number;
    updated_at: number;
    user_id: number;
    tenant_id: number;
    _all: number;
  };

  export type ClinicMinAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ClinicMaxAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
  };

  export type ClinicCountAggregateInputType = {
    id?: true;
    description?: true;
    location?: true;
    opening_hours?: true;
    closing_hours?: true;
    name?: true;
    created_at?: true;
    updated_at?: true;
    user_id?: true;
    tenant_id?: true;
    _all?: true;
  };

  export type ClinicAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinic to aggregate.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned clinics
     **/
    _count?: true | ClinicCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: ClinicMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: ClinicMaxAggregateInputType;
  };

  export type GetClinicAggregateType<T extends ClinicAggregateArgs> = {
    [P in keyof T & keyof AggregateClinic]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClinic[P]>
      : GetScalarType<T[P], AggregateClinic[P]>;
  };

  export type clinicGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: clinicWhereInput;
    orderBy?: clinicOrderByWithAggregationInput | clinicOrderByWithAggregationInput[];
    by: ClinicScalarFieldEnum[] | ClinicScalarFieldEnum;
    having?: clinicScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ClinicCountAggregateInputType | true;
    _min?: ClinicMinAggregateInputType;
    _max?: ClinicMaxAggregateInputType;
  };

  export type ClinicGroupByOutputType = {
    id: string;
    description: string | null;
    location: string | null;
    opening_hours: string | null;
    closing_hours: string | null;
    name: string;
    created_at: Date;
    updated_at: Date;
    user_id: string;
    tenant_id: string;
    _count: ClinicCountAggregateOutputType | null;
    _min: ClinicMinAggregateOutputType | null;
    _max: ClinicMaxAggregateOutputType | null;
  };

  type GetClinicGroupByPayload<T extends clinicGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClinicGroupByOutputType, T['by']> & {
        [P in keyof T & keyof ClinicGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], ClinicGroupByOutputType[P]>
          : GetScalarType<T[P], ClinicGroupByOutputType[P]>;
      }
    >
  >;

  export type clinicSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      description?: boolean;
      location?: boolean;
      opening_hours?: boolean;
      closing_hours?: boolean;
      name?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user_id?: boolean;
      tenant_id?: boolean;
      appointment?: boolean | clinic$appointmentArgs<ExtArgs>;
      user?: boolean | userDefaultArgs<ExtArgs>;
      _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['clinic']
  >;

  export type clinicSelectScalar = {
    id?: boolean;
    description?: boolean;
    location?: boolean;
    opening_hours?: boolean;
    closing_hours?: boolean;
    name?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user_id?: boolean;
    tenant_id?: boolean;
  };

  export type clinicInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | clinic$appointmentArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | ClinicCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $clinicPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'clinic';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        description: string | null;
        location: string | null;
        opening_hours: string | null;
        closing_hours: string | null;
        name: string;
        created_at: Date;
        updated_at: Date;
        user_id: string;
        tenant_id: string;
      },
      ExtArgs['result']['clinic']
    >;
    composites: {};
  };

  type clinicGetPayload<S extends boolean | null | undefined | clinicDefaultArgs> = $Result.GetResult<
    Prisma.$clinicPayload,
    S
  >;

  type clinicCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    clinicFindManyArgs,
    'select' | 'include'
  > & {
    select?: ClinicCountAggregateInputType | true;
  };

  export interface clinicDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['clinic']; meta: { name: 'clinic' } };
    /**
     * Find zero or one Clinic that matches the filter.
     * @param {clinicFindUniqueArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends clinicFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, clinicFindUniqueArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Clinic that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {clinicFindUniqueOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends clinicFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first Clinic that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindFirstArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends clinicFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindFirstArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Clinic that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindFirstOrThrowArgs} args - Arguments to find a Clinic
     * @example
     * // Get one Clinic
     * const clinic = await prisma.clinic.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends clinicFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Clinics that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clinics
     * const clinics = await prisma.clinic.findMany()
     *
     * // Get first 10 Clinics
     * const clinics = await prisma.clinic.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const clinicWithIdOnly = await prisma.clinic.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends clinicFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Clinic.
     * @param {clinicCreateArgs} args - Arguments to create a Clinic.
     * @example
     * // Create one Clinic
     * const Clinic = await prisma.clinic.create({
     *   data: {
     *     // ... data to create a Clinic
     *   }
     * })
     *
     **/
    create<T extends clinicCreateArgs<ExtArgs>>(
      args: SelectSubset<T, clinicCreateArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Clinics.
     *     @param {clinicCreateManyArgs} args - Arguments to create many Clinics.
     *     @example
     *     // Create many Clinics
     *     const clinic = await prisma.clinic.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends clinicCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Clinic.
     * @param {clinicDeleteArgs} args - Arguments to delete one Clinic.
     * @example
     * // Delete one Clinic
     * const Clinic = await prisma.clinic.delete({
     *   where: {
     *     // ... filter to delete one Clinic
     *   }
     * })
     *
     **/
    delete<T extends clinicDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, clinicDeleteArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Clinic.
     * @param {clinicUpdateArgs} args - Arguments to update one Clinic.
     * @example
     * // Update one Clinic
     * const clinic = await prisma.clinic.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends clinicUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpdateArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Clinics.
     * @param {clinicDeleteManyArgs} args - Arguments to filter Clinics to delete.
     * @example
     * // Delete a few Clinics
     * const { count } = await prisma.clinic.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends clinicDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, clinicDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clinics
     * const clinic = await prisma.clinic.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends clinicUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Clinic.
     * @param {clinicUpsertArgs} args - Arguments to update or create a Clinic.
     * @example
     * // Update or create a Clinic
     * const clinic = await prisma.clinic.upsert({
     *   create: {
     *     // ... data to create a Clinic
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Clinic we want to update
     *   }
     * })
     **/
    upsert<T extends clinicUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, clinicUpsertArgs<ExtArgs>>,
    ): Prisma__clinicClient<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Clinics.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicCountArgs} args - Arguments to filter Clinics to count.
     * @example
     * // Count the number of Clinics
     * const count = await prisma.clinic.count({
     *   where: {
     *     // ... the filter for the Clinics we want to count
     *   }
     * })
     **/
    count<T extends clinicCountArgs>(
      args?: Subset<T, clinicCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClinicCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClinicAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends ClinicAggregateArgs>(
      args: Subset<T, ClinicAggregateArgs>,
    ): Prisma.PrismaPromise<GetClinicAggregateType<T>>;

    /**
     * Group by Clinic.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {clinicGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends clinicGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: clinicGroupByArgs['orderBy'] }
        : { orderBy?: clinicGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, clinicGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetClinicGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the clinic model
     */
    readonly fields: clinicFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for clinic.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__clinicClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends clinic$appointmentArgs<ExtArgs> = {}>(
      args?: Subset<T, clinic$appointmentArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the clinic model
   */
  interface clinicFieldRefs {
    readonly id: FieldRef<'clinic', 'String'>;
    readonly description: FieldRef<'clinic', 'String'>;
    readonly location: FieldRef<'clinic', 'String'>;
    readonly opening_hours: FieldRef<'clinic', 'String'>;
    readonly closing_hours: FieldRef<'clinic', 'String'>;
    readonly name: FieldRef<'clinic', 'String'>;
    readonly created_at: FieldRef<'clinic', 'DateTime'>;
    readonly updated_at: FieldRef<'clinic', 'DateTime'>;
    readonly user_id: FieldRef<'clinic', 'String'>;
    readonly tenant_id: FieldRef<'clinic', 'String'>;
  }

  // Custom InputTypes

  /**
   * clinic findUnique
   */
  export type clinicFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic findUniqueOrThrow
   */
  export type clinicFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic findFirst
   */
  export type clinicFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic findFirstOrThrow
   */
  export type clinicFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinic to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of clinics.
     */
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic findMany
   */
  export type clinicFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter, which clinics to fetch.
     */
    where?: clinicWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of clinics to fetch.
     */
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing clinics.
     */
    cursor?: clinicWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` clinics from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` clinics.
     */
    skip?: number;
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * clinic create
   */
  export type clinicCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The data needed to create a clinic.
     */
    data: XOR<clinicCreateInput, clinicUncheckedCreateInput>;
  };

  /**
   * clinic createMany
   */
  export type clinicCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many clinics.
     */
    data: clinicCreateManyInput | clinicCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * clinic update
   */
  export type clinicUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The data needed to update a clinic.
     */
    data: XOR<clinicUpdateInput, clinicUncheckedUpdateInput>;
    /**
     * Choose, which clinic to update.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic updateMany
   */
  export type clinicUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update clinics.
     */
    data: XOR<clinicUpdateManyMutationInput, clinicUncheckedUpdateManyInput>;
    /**
     * Filter which clinics to update
     */
    where?: clinicWhereInput;
  };

  /**
   * clinic upsert
   */
  export type clinicUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * The filter to search for the clinic to update in case it exists.
     */
    where: clinicWhereUniqueInput;
    /**
     * In case the clinic found by the `where` argument doesn't exist, create a new clinic with this data.
     */
    create: XOR<clinicCreateInput, clinicUncheckedCreateInput>;
    /**
     * In case the clinic was found with the provided `where` argument, update it with this data.
     */
    update: XOR<clinicUpdateInput, clinicUncheckedUpdateInput>;
  };

  /**
   * clinic delete
   */
  export type clinicDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    /**
     * Filter which clinic to delete.
     */
    where: clinicWhereUniqueInput;
  };

  /**
   * clinic deleteMany
   */
  export type clinicDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which clinics to delete
     */
    where?: clinicWhereInput;
  };

  /**
   * clinic.appointment
   */
  export type clinic$appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * clinic without action
   */
  export type clinicDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
  };

  /**
   * Model insurance_provider
   */

  export type AggregateInsurance_provider = {
    _count: Insurance_providerCountAggregateOutputType | null;
    _min: Insurance_providerMinAggregateOutputType | null;
    _max: Insurance_providerMaxAggregateOutputType | null;
  };

  export type Insurance_providerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    contact_number: string | null;
    address: string | null;
    email: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Insurance_providerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    contact_number: string | null;
    address: string | null;
    email: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Insurance_providerCountAggregateOutputType = {
    id: number;
    name: number;
    contact_number: number;
    address: number;
    email: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Insurance_providerMinAggregateInputType = {
    id?: true;
    name?: true;
    contact_number?: true;
    address?: true;
    email?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Insurance_providerMaxAggregateInputType = {
    id?: true;
    name?: true;
    contact_number?: true;
    address?: true;
    email?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Insurance_providerCountAggregateInputType = {
    id?: true;
    name?: true;
    contact_number?: true;
    address?: true;
    email?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Insurance_providerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurance_provider to aggregate.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned insurance_providers
     **/
    _count?: true | Insurance_providerCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Insurance_providerMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Insurance_providerMaxAggregateInputType;
  };

  export type GetInsurance_providerAggregateType<T extends Insurance_providerAggregateArgs> = {
    [P in keyof T & keyof AggregateInsurance_provider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInsurance_provider[P]>
      : GetScalarType<T[P], AggregateInsurance_provider[P]>;
  };

  export type insurance_providerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: insurance_providerWhereInput;
    orderBy?: insurance_providerOrderByWithAggregationInput | insurance_providerOrderByWithAggregationInput[];
    by: Insurance_providerScalarFieldEnum[] | Insurance_providerScalarFieldEnum;
    having?: insurance_providerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Insurance_providerCountAggregateInputType | true;
    _min?: Insurance_providerMinAggregateInputType;
    _max?: Insurance_providerMaxAggregateInputType;
  };

  export type Insurance_providerGroupByOutputType = {
    id: string;
    name: string;
    contact_number: string;
    address: string;
    email: string;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Insurance_providerCountAggregateOutputType | null;
    _min: Insurance_providerMinAggregateOutputType | null;
    _max: Insurance_providerMaxAggregateOutputType | null;
  };

  type GetInsurance_providerGroupByPayload<T extends insurance_providerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Insurance_providerGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Insurance_providerGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Insurance_providerGroupByOutputType[P]>
          : GetScalarType<T[P], Insurance_providerGroupByOutputType[P]>;
      }
    >
  >;

  export type insurance_providerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        name?: boolean;
        contact_number?: boolean;
        address?: boolean;
        email?: boolean;
        user_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        billing?: boolean | insurance_provider$billingArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
        _count?: boolean | Insurance_providerCountOutputTypeDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['insurance_provider']
    >;

  export type insurance_providerSelectScalar = {
    id?: boolean;
    name?: boolean;
    contact_number?: boolean;
    address?: boolean;
    email?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type insurance_providerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    billing?: boolean | insurance_provider$billingArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
    _count?: boolean | Insurance_providerCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $insurance_providerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'insurance_provider';
    objects: {
      billing: Prisma.$billingPayload<ExtArgs>[];
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        name: string;
        contact_number: string;
        address: string;
        email: string;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['insurance_provider']
    >;
    composites: {};
  };

  type insurance_providerGetPayload<S extends boolean | null | undefined | insurance_providerDefaultArgs> =
    $Result.GetResult<Prisma.$insurance_providerPayload, S>;

  type insurance_providerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    insurance_providerFindManyArgs,
    'select' | 'include'
  > & {
    select?: Insurance_providerCountAggregateInputType | true;
  };

  export interface insurance_providerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: {
      types: Prisma.TypeMap<ExtArgs>['model']['insurance_provider'];
      meta: { name: 'insurance_provider' };
    };
    /**
     * Find zero or one Insurance_provider that matches the filter.
     * @param {insurance_providerFindUniqueArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends insurance_providerFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerFindUniqueArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Insurance_provider that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {insurance_providerFindUniqueOrThrowArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends insurance_providerFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Insurance_provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindFirstArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends insurance_providerFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindFirstArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Insurance_provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindFirstOrThrowArgs} args - Arguments to find a Insurance_provider
     * @example
     * // Get one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends insurance_providerFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Insurance_providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Insurance_providers
     * const insurance_providers = await prisma.insurance_provider.findMany()
     *
     * // Get first 10 Insurance_providers
     * const insurance_providers = await prisma.insurance_provider.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const insurance_providerWithIdOnly = await prisma.insurance_provider.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends insurance_providerFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Insurance_provider.
     * @param {insurance_providerCreateArgs} args - Arguments to create a Insurance_provider.
     * @example
     * // Create one Insurance_provider
     * const Insurance_provider = await prisma.insurance_provider.create({
     *   data: {
     *     // ... data to create a Insurance_provider
     *   }
     * })
     *
     **/
    create<T extends insurance_providerCreateArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerCreateArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Insurance_providers.
     *     @param {insurance_providerCreateManyArgs} args - Arguments to create many Insurance_providers.
     *     @example
     *     // Create many Insurance_providers
     *     const insurance_provider = await prisma.insurance_provider.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends insurance_providerCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Insurance_provider.
     * @param {insurance_providerDeleteArgs} args - Arguments to delete one Insurance_provider.
     * @example
     * // Delete one Insurance_provider
     * const Insurance_provider = await prisma.insurance_provider.delete({
     *   where: {
     *     // ... filter to delete one Insurance_provider
     *   }
     * })
     *
     **/
    delete<T extends insurance_providerDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerDeleteArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Insurance_provider.
     * @param {insurance_providerUpdateArgs} args - Arguments to update one Insurance_provider.
     * @example
     * // Update one Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends insurance_providerUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpdateArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Insurance_providers.
     * @param {insurance_providerDeleteManyArgs} args - Arguments to filter Insurance_providers to delete.
     * @example
     * // Delete a few Insurance_providers
     * const { count } = await prisma.insurance_provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends insurance_providerDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, insurance_providerDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Insurance_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Insurance_providers
     * const insurance_provider = await prisma.insurance_provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends insurance_providerUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Insurance_provider.
     * @param {insurance_providerUpsertArgs} args - Arguments to update or create a Insurance_provider.
     * @example
     * // Update or create a Insurance_provider
     * const insurance_provider = await prisma.insurance_provider.upsert({
     *   create: {
     *     // ... data to create a Insurance_provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Insurance_provider we want to update
     *   }
     * })
     **/
    upsert<T extends insurance_providerUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, insurance_providerUpsertArgs<ExtArgs>>,
    ): Prisma__insurance_providerClient<
      $Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Insurance_providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerCountArgs} args - Arguments to filter Insurance_providers to count.
     * @example
     * // Count the number of Insurance_providers
     * const count = await prisma.insurance_provider.count({
     *   where: {
     *     // ... the filter for the Insurance_providers we want to count
     *   }
     * })
     **/
    count<T extends insurance_providerCountArgs>(
      args?: Subset<T, insurance_providerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Insurance_providerCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Insurance_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Insurance_providerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Insurance_providerAggregateArgs>(
      args: Subset<T, Insurance_providerAggregateArgs>,
    ): Prisma.PrismaPromise<GetInsurance_providerAggregateType<T>>;

    /**
     * Group by Insurance_provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {insurance_providerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends insurance_providerGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: insurance_providerGroupByArgs['orderBy'] }
        : { orderBy?: insurance_providerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, insurance_providerGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInsurance_providerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the insurance_provider model
     */
    readonly fields: insurance_providerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for insurance_provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__insurance_providerClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    billing<T extends insurance_provider$billingArgs<ExtArgs> = {}>(
      args?: Subset<T, insurance_provider$billingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'findMany'> | Null>;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the insurance_provider model
   */
  interface insurance_providerFieldRefs {
    readonly id: FieldRef<'insurance_provider', 'String'>;
    readonly name: FieldRef<'insurance_provider', 'String'>;
    readonly contact_number: FieldRef<'insurance_provider', 'String'>;
    readonly address: FieldRef<'insurance_provider', 'String'>;
    readonly email: FieldRef<'insurance_provider', 'String'>;
    readonly user_id: FieldRef<'insurance_provider', 'String'>;
    readonly created_at: FieldRef<'insurance_provider', 'DateTime'>;
    readonly updated_at: FieldRef<'insurance_provider', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * insurance_provider findUnique
   */
  export type insurance_providerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider findUniqueOrThrow
   */
  export type insurance_providerFindUniqueOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider findFirst
   */
  export type insurance_providerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of insurance_providers.
     */
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider findFirstOrThrow
   */
  export type insurance_providerFindFirstOrThrowArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_provider to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of insurance_providers.
     */
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider findMany
   */
  export type insurance_providerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter, which insurance_providers to fetch.
     */
    where?: insurance_providerWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of insurance_providers to fetch.
     */
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing insurance_providers.
     */
    cursor?: insurance_providerWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` insurance_providers from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` insurance_providers.
     */
    skip?: number;
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * insurance_provider create
   */
  export type insurance_providerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The data needed to create a insurance_provider.
     */
    data: XOR<insurance_providerCreateInput, insurance_providerUncheckedCreateInput>;
  };

  /**
   * insurance_provider createMany
   */
  export type insurance_providerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many insurance_providers.
     */
    data: insurance_providerCreateManyInput | insurance_providerCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * insurance_provider update
   */
  export type insurance_providerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The data needed to update a insurance_provider.
     */
    data: XOR<insurance_providerUpdateInput, insurance_providerUncheckedUpdateInput>;
    /**
     * Choose, which insurance_provider to update.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider updateMany
   */
  export type insurance_providerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update insurance_providers.
     */
    data: XOR<insurance_providerUpdateManyMutationInput, insurance_providerUncheckedUpdateManyInput>;
    /**
     * Filter which insurance_providers to update
     */
    where?: insurance_providerWhereInput;
  };

  /**
   * insurance_provider upsert
   */
  export type insurance_providerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * The filter to search for the insurance_provider to update in case it exists.
     */
    where: insurance_providerWhereUniqueInput;
    /**
     * In case the insurance_provider found by the `where` argument doesn't exist, create a new insurance_provider with this data.
     */
    create: XOR<insurance_providerCreateInput, insurance_providerUncheckedCreateInput>;
    /**
     * In case the insurance_provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<insurance_providerUpdateInput, insurance_providerUncheckedUpdateInput>;
  };

  /**
   * insurance_provider delete
   */
  export type insurance_providerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    /**
     * Filter which insurance_provider to delete.
     */
    where: insurance_providerWhereUniqueInput;
  };

  /**
   * insurance_provider deleteMany
   */
  export type insurance_providerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which insurance_providers to delete
     */
    where?: insurance_providerWhereInput;
  };

  /**
   * insurance_provider.billing
   */
  export type insurance_provider$billingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    where?: billingWhereInput;
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[];
    cursor?: billingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[];
  };

  /**
   * insurance_provider without action
   */
  export type insurance_providerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
  };

  /**
   * Model invoice
   */

  export type AggregateInvoice = {
    _count: InvoiceCountAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
  };

  export type InvoiceMinAggregateOutputType = {
    id: string | null;
    payment_method: string | null;
    invoice_status: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InvoiceMaxAggregateOutputType = {
    id: string | null;
    payment_method: string | null;
    invoice_status: string | null;
    user_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type InvoiceCountAggregateOutputType = {
    id: number;
    payment_method: number;
    invoice_status: number;
    user_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type InvoiceMinAggregateInputType = {
    id?: true;
    payment_method?: true;
    invoice_status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InvoiceMaxAggregateInputType = {
    id?: true;
    payment_method?: true;
    invoice_status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type InvoiceCountAggregateInputType = {
    id?: true;
    payment_method?: true;
    invoice_status?: true;
    user_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type InvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoice to aggregate.
     */
    where?: invoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: invoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned invoices
     **/
    _count?: true | InvoiceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: InvoiceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: InvoiceMaxAggregateInputType;
  };

  export type GetInvoiceAggregateType<T extends InvoiceAggregateArgs> = {
    [P in keyof T & keyof AggregateInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInvoice[P]>
      : GetScalarType<T[P], AggregateInvoice[P]>;
  };

  export type invoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: invoiceWhereInput;
    orderBy?: invoiceOrderByWithAggregationInput | invoiceOrderByWithAggregationInput[];
    by: InvoiceScalarFieldEnum[] | InvoiceScalarFieldEnum;
    having?: invoiceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: InvoiceCountAggregateInputType | true;
    _min?: InvoiceMinAggregateInputType;
    _max?: InvoiceMaxAggregateInputType;
  };

  export type InvoiceGroupByOutputType = {
    id: string;
    payment_method: string | null;
    invoice_status: string | null;
    user_id: string;
    created_at: Date;
    updated_at: Date;
    _count: InvoiceCountAggregateOutputType | null;
    _min: InvoiceMinAggregateOutputType | null;
    _max: InvoiceMaxAggregateOutputType | null;
  };

  type GetInvoiceGroupByPayload<T extends invoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InvoiceGroupByOutputType, T['by']> & {
        [P in keyof T & keyof InvoiceGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], InvoiceGroupByOutputType[P]>
          : GetScalarType<T[P], InvoiceGroupByOutputType[P]>;
      }
    >
  >;

  export type invoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      payment_method?: boolean;
      invoice_status?: boolean;
      user_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      user?: boolean | userDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['invoice']
  >;

  export type invoiceSelectScalar = {
    id?: boolean;
    payment_method?: boolean;
    invoice_status?: boolean;
    user_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type invoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $invoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'invoice';
    objects: {
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        payment_method: string | null;
        invoice_status: string | null;
        user_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['invoice']
    >;
    composites: {};
  };

  type invoiceGetPayload<S extends boolean | null | undefined | invoiceDefaultArgs> = $Result.GetResult<
    Prisma.$invoicePayload,
    S
  >;

  type invoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    invoiceFindManyArgs,
    'select' | 'include'
  > & {
    select?: InvoiceCountAggregateInputType | true;
  };

  export interface invoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['invoice']; meta: { name: 'invoice' } };
    /**
     * Find zero or one Invoice that matches the filter.
     * @param {invoiceFindUniqueArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends invoiceFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceFindUniqueArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one Invoice that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {invoiceFindUniqueOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends invoiceFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__invoiceClient<
      $Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Invoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends invoiceFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindFirstArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first Invoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindFirstOrThrowArgs} args - Arguments to find a Invoice
     * @example
     * // Get one Invoice
     * const invoice = await prisma.invoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends invoiceFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Invoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Invoices
     * const invoices = await prisma.invoice.findMany()
     *
     * // Get first 10 Invoices
     * const invoices = await prisma.invoice.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const invoiceWithIdOnly = await prisma.invoice.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends invoiceFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Invoice.
     * @param {invoiceCreateArgs} args - Arguments to create a Invoice.
     * @example
     * // Create one Invoice
     * const Invoice = await prisma.invoice.create({
     *   data: {
     *     // ... data to create a Invoice
     *   }
     * })
     *
     **/
    create<T extends invoiceCreateArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceCreateArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Invoices.
     *     @param {invoiceCreateManyArgs} args - Arguments to create many Invoices.
     *     @example
     *     // Create many Invoices
     *     const invoice = await prisma.invoice.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends invoiceCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Invoice.
     * @param {invoiceDeleteArgs} args - Arguments to delete one Invoice.
     * @example
     * // Delete one Invoice
     * const Invoice = await prisma.invoice.delete({
     *   where: {
     *     // ... filter to delete one Invoice
     *   }
     * })
     *
     **/
    delete<T extends invoiceDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceDeleteArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one Invoice.
     * @param {invoiceUpdateArgs} args - Arguments to update one Invoice.
     * @example
     * // Update one Invoice
     * const invoice = await prisma.invoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends invoiceUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceUpdateArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Invoices.
     * @param {invoiceDeleteManyArgs} args - Arguments to filter Invoices to delete.
     * @example
     * // Delete a few Invoices
     * const { count } = await prisma.invoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends invoiceDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, invoiceDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Invoices
     * const invoice = await prisma.invoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends invoiceUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Invoice.
     * @param {invoiceUpsertArgs} args - Arguments to update or create a Invoice.
     * @example
     * // Update or create a Invoice
     * const invoice = await prisma.invoice.upsert({
     *   create: {
     *     // ... data to create a Invoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Invoice we want to update
     *   }
     * })
     **/
    upsert<T extends invoiceUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, invoiceUpsertArgs<ExtArgs>>,
    ): Prisma__invoiceClient<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Invoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceCountArgs} args - Arguments to filter Invoices to count.
     * @example
     * // Count the number of Invoices
     * const count = await prisma.invoice.count({
     *   where: {
     *     // ... the filter for the Invoices we want to count
     *   }
     * })
     **/
    count<T extends invoiceCountArgs>(
      args?: Subset<T, invoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InvoiceCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends InvoiceAggregateArgs>(
      args: Subset<T, InvoiceAggregateArgs>,
    ): Prisma.PrismaPromise<GetInvoiceAggregateType<T>>;

    /**
     * Group by Invoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {invoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends invoiceGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: invoiceGroupByArgs['orderBy'] }
        : { orderBy?: invoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, invoiceGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the invoice model
     */
    readonly fields: invoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for invoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__invoiceClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the invoice model
   */
  interface invoiceFieldRefs {
    readonly id: FieldRef<'invoice', 'String'>;
    readonly payment_method: FieldRef<'invoice', 'String'>;
    readonly invoice_status: FieldRef<'invoice', 'String'>;
    readonly user_id: FieldRef<'invoice', 'String'>;
    readonly created_at: FieldRef<'invoice', 'DateTime'>;
    readonly updated_at: FieldRef<'invoice', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * invoice findUnique
   */
  export type invoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput;
  };

  /**
   * invoice findUniqueOrThrow
   */
  export type invoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter, which invoice to fetch.
     */
    where: invoiceWhereUniqueInput;
  };

  /**
   * invoice findFirst
   */
  export type invoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * invoice findFirstOrThrow
   */
  export type invoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter, which invoice to fetch.
     */
    where?: invoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for invoices.
     */
    cursor?: invoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of invoices.
     */
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * invoice findMany
   */
  export type invoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter, which invoices to fetch.
     */
    where?: invoiceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of invoices to fetch.
     */
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing invoices.
     */
    cursor?: invoiceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` invoices from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` invoices.
     */
    skip?: number;
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * invoice create
   */
  export type invoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * The data needed to create a invoice.
     */
    data: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>;
  };

  /**
   * invoice createMany
   */
  export type invoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many invoices.
     */
    data: invoiceCreateManyInput | invoiceCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * invoice update
   */
  export type invoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * The data needed to update a invoice.
     */
    data: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>;
    /**
     * Choose, which invoice to update.
     */
    where: invoiceWhereUniqueInput;
  };

  /**
   * invoice updateMany
   */
  export type invoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update invoices.
     */
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyInput>;
    /**
     * Filter which invoices to update
     */
    where?: invoiceWhereInput;
  };

  /**
   * invoice upsert
   */
  export type invoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * The filter to search for the invoice to update in case it exists.
     */
    where: invoiceWhereUniqueInput;
    /**
     * In case the invoice found by the `where` argument doesn't exist, create a new invoice with this data.
     */
    create: XOR<invoiceCreateInput, invoiceUncheckedCreateInput>;
    /**
     * In case the invoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<invoiceUpdateInput, invoiceUncheckedUpdateInput>;
  };

  /**
   * invoice delete
   */
  export type invoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    /**
     * Filter which invoice to delete.
     */
    where: invoiceWhereUniqueInput;
  };

  /**
   * invoice deleteMany
   */
  export type invoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which invoices to delete
     */
    where?: invoiceWhereInput;
  };

  /**
   * invoice without action
   */
  export type invoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
  };

  /**
   * Model medical_record
   */

  export type AggregateMedical_record = {
    _count: Medical_recordCountAggregateOutputType | null;
    _min: Medical_recordMinAggregateOutputType | null;
    _max: Medical_recordMaxAggregateOutputType | null;
  };

  export type Medical_recordMinAggregateOutputType = {
    id: string | null;
    diagnosis: string | null;
    prescription: string | null;
    notes: string | null;
    appointment_id: string | null;
    patient_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Medical_recordMaxAggregateOutputType = {
    id: string | null;
    diagnosis: string | null;
    prescription: string | null;
    notes: string | null;
    appointment_id: string | null;
    patient_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type Medical_recordCountAggregateOutputType = {
    id: number;
    diagnosis: number;
    prescription: number;
    notes: number;
    appointment_id: number;
    patient_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type Medical_recordMinAggregateInputType = {
    id?: true;
    diagnosis?: true;
    prescription?: true;
    notes?: true;
    appointment_id?: true;
    patient_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Medical_recordMaxAggregateInputType = {
    id?: true;
    diagnosis?: true;
    prescription?: true;
    notes?: true;
    appointment_id?: true;
    patient_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type Medical_recordCountAggregateInputType = {
    id?: true;
    diagnosis?: true;
    prescription?: true;
    notes?: true;
    appointment_id?: true;
    patient_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type Medical_recordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_record to aggregate.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned medical_records
     **/
    _count?: true | Medical_recordCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: Medical_recordMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: Medical_recordMaxAggregateInputType;
  };

  export type GetMedical_recordAggregateType<T extends Medical_recordAggregateArgs> = {
    [P in keyof T & keyof AggregateMedical_record]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedical_record[P]>
      : GetScalarType<T[P], AggregateMedical_record[P]>;
  };

  export type medical_recordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: medical_recordWhereInput;
    orderBy?: medical_recordOrderByWithAggregationInput | medical_recordOrderByWithAggregationInput[];
    by: Medical_recordScalarFieldEnum[] | Medical_recordScalarFieldEnum;
    having?: medical_recordScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: Medical_recordCountAggregateInputType | true;
    _min?: Medical_recordMinAggregateInputType;
    _max?: Medical_recordMaxAggregateInputType;
  };

  export type Medical_recordGroupByOutputType = {
    id: string;
    diagnosis: string;
    prescription: string;
    notes: string | null;
    appointment_id: string;
    patient_id: string;
    created_at: Date;
    updated_at: Date;
    _count: Medical_recordCountAggregateOutputType | null;
    _min: Medical_recordMinAggregateOutputType | null;
    _max: Medical_recordMaxAggregateOutputType | null;
  };

  type GetMedical_recordGroupByPayload<T extends medical_recordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Medical_recordGroupByOutputType, T['by']> & {
        [P in keyof T & keyof Medical_recordGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], Medical_recordGroupByOutputType[P]>
          : GetScalarType<T[P], Medical_recordGroupByOutputType[P]>;
      }
    >
  >;

  export type medical_recordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    $Extensions.GetSelect<
      {
        id?: boolean;
        diagnosis?: boolean;
        prescription?: boolean;
        notes?: boolean;
        appointment_id?: boolean;
        patient_id?: boolean;
        created_at?: boolean;
        updated_at?: boolean;
        appointment?: boolean | appointmentDefaultArgs<ExtArgs>;
        user?: boolean | userDefaultArgs<ExtArgs>;
      },
      ExtArgs['result']['medical_record']
    >;

  export type medical_recordSelectScalar = {
    id?: boolean;
    diagnosis?: boolean;
    prescription?: boolean;
    notes?: boolean;
    appointment_id?: boolean;
    patient_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type medical_recordInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment?: boolean | appointmentDefaultArgs<ExtArgs>;
    user?: boolean | userDefaultArgs<ExtArgs>;
  };

  export type $medical_recordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'medical_record';
    objects: {
      appointment: Prisma.$appointmentPayload<ExtArgs>;
      user: Prisma.$userPayload<ExtArgs>;
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        diagnosis: string;
        prescription: string;
        notes: string | null;
        appointment_id: string;
        patient_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['medical_record']
    >;
    composites: {};
  };

  type medical_recordGetPayload<S extends boolean | null | undefined | medical_recordDefaultArgs> = $Result.GetResult<
    Prisma.$medical_recordPayload,
    S
  >;

  type medical_recordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    medical_recordFindManyArgs,
    'select' | 'include'
  > & {
    select?: Medical_recordCountAggregateInputType | true;
  };

  export interface medical_recordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['medical_record']; meta: { name: 'medical_record' } };
    /**
     * Find zero or one Medical_record that matches the filter.
     * @param {medical_recordFindUniqueArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends medical_recordFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordFindUniqueArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findUnique'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find one Medical_record that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {medical_recordFindUniqueOrThrowArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends medical_recordFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findUniqueOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find the first Medical_record that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordFindFirstArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends medical_recordFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindFirstArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findFirst'> | null,
      null,
      ExtArgs
    >;

    /**
     * Find the first Medical_record that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordFindFirstOrThrowArgs} args - Arguments to find a Medical_record
     * @example
     * // Get one Medical_record
     * const medical_record = await prisma.medical_record.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends medical_recordFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findFirstOrThrow'>,
      never,
      ExtArgs
    >;

    /**
     * Find zero or more Medical_records that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medical_records
     * const medical_records = await prisma.medical_record.findMany()
     *
     * // Get first 10 Medical_records
     * const medical_records = await prisma.medical_record.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const medical_recordWithIdOnly = await prisma.medical_record.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends medical_recordFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a Medical_record.
     * @param {medical_recordCreateArgs} args - Arguments to create a Medical_record.
     * @example
     * // Create one Medical_record
     * const Medical_record = await prisma.medical_record.create({
     *   data: {
     *     // ... data to create a Medical_record
     *   }
     * })
     *
     **/
    create<T extends medical_recordCreateArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordCreateArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'create'>,
      never,
      ExtArgs
    >;

    /**
     * Create many Medical_records.
     *     @param {medical_recordCreateManyArgs} args - Arguments to create many Medical_records.
     *     @example
     *     // Create many Medical_records
     *     const medical_record = await prisma.medical_record.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends medical_recordCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a Medical_record.
     * @param {medical_recordDeleteArgs} args - Arguments to delete one Medical_record.
     * @example
     * // Delete one Medical_record
     * const Medical_record = await prisma.medical_record.delete({
     *   where: {
     *     // ... filter to delete one Medical_record
     *   }
     * })
     *
     **/
    delete<T extends medical_recordDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordDeleteArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'delete'>,
      never,
      ExtArgs
    >;

    /**
     * Update one Medical_record.
     * @param {medical_recordUpdateArgs} args - Arguments to update one Medical_record.
     * @example
     * // Update one Medical_record
     * const medical_record = await prisma.medical_record.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends medical_recordUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordUpdateArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'update'>,
      never,
      ExtArgs
    >;

    /**
     * Delete zero or more Medical_records.
     * @param {medical_recordDeleteManyArgs} args - Arguments to filter Medical_records to delete.
     * @example
     * // Delete a few Medical_records
     * const { count } = await prisma.medical_record.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends medical_recordDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, medical_recordDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Medical_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medical_records
     * const medical_record = await prisma.medical_record.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends medical_recordUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one Medical_record.
     * @param {medical_recordUpsertArgs} args - Arguments to update or create a Medical_record.
     * @example
     * // Update or create a Medical_record
     * const medical_record = await prisma.medical_record.upsert({
     *   create: {
     *     // ... data to create a Medical_record
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medical_record we want to update
     *   }
     * })
     **/
    upsert<T extends medical_recordUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, medical_recordUpsertArgs<ExtArgs>>,
    ): Prisma__medical_recordClient<
      $Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'upsert'>,
      never,
      ExtArgs
    >;

    /**
     * Count the number of Medical_records.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordCountArgs} args - Arguments to filter Medical_records to count.
     * @example
     * // Count the number of Medical_records
     * const count = await prisma.medical_record.count({
     *   where: {
     *     // ... the filter for the Medical_records we want to count
     *   }
     * })
     **/
    count<T extends medical_recordCountArgs>(
      args?: Subset<T, medical_recordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Medical_recordCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a Medical_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Medical_recordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends Medical_recordAggregateArgs>(
      args: Subset<T, Medical_recordAggregateArgs>,
    ): Prisma.PrismaPromise<GetMedical_recordAggregateType<T>>;

    /**
     * Group by Medical_record.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {medical_recordGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends medical_recordGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: medical_recordGroupByArgs['orderBy'] }
        : { orderBy?: medical_recordGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, medical_recordGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetMedical_recordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the medical_record model
     */
    readonly fields: medical_recordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for medical_record.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__medical_recordClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment<T extends appointmentDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, appointmentDefaultArgs<ExtArgs>>,
    ): Prisma__appointmentClient<
      $Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    user<T extends userDefaultArgs<ExtArgs> = {}>(
      args?: Subset<T, userDefaultArgs<ExtArgs>>,
    ): Prisma__userClient<
      $Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null,
      Null,
      ExtArgs
    >;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the medical_record model
   */
  interface medical_recordFieldRefs {
    readonly id: FieldRef<'medical_record', 'String'>;
    readonly diagnosis: FieldRef<'medical_record', 'String'>;
    readonly prescription: FieldRef<'medical_record', 'String'>;
    readonly notes: FieldRef<'medical_record', 'String'>;
    readonly appointment_id: FieldRef<'medical_record', 'String'>;
    readonly patient_id: FieldRef<'medical_record', 'String'>;
    readonly created_at: FieldRef<'medical_record', 'DateTime'>;
    readonly updated_at: FieldRef<'medical_record', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * medical_record findUnique
   */
  export type medical_recordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_record to fetch.
     */
    where: medical_recordWhereUniqueInput;
  };

  /**
   * medical_record findUniqueOrThrow
   */
  export type medical_recordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    {
      /**
       * Select specific fields to fetch from the medical_record
       */
      select?: medical_recordSelect<ExtArgs> | null;
      /**
       * Choose, which related nodes to fetch as well.
       */
      include?: medical_recordInclude<ExtArgs> | null;
      /**
       * Filter, which medical_record to fetch.
       */
      where: medical_recordWhereUniqueInput;
    };

  /**
   * medical_record findFirst
   */
  export type medical_recordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_record to fetch.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for medical_records.
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of medical_records.
     */
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * medical_record findFirstOrThrow
   */
  export type medical_recordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_record to fetch.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for medical_records.
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of medical_records.
     */
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * medical_record findMany
   */
  export type medical_recordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter, which medical_records to fetch.
     */
    where?: medical_recordWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of medical_records to fetch.
     */
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing medical_records.
     */
    cursor?: medical_recordWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` medical_records from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` medical_records.
     */
    skip?: number;
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * medical_record create
   */
  export type medical_recordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * The data needed to create a medical_record.
     */
    data: XOR<medical_recordCreateInput, medical_recordUncheckedCreateInput>;
  };

  /**
   * medical_record createMany
   */
  export type medical_recordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many medical_records.
     */
    data: medical_recordCreateManyInput | medical_recordCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * medical_record update
   */
  export type medical_recordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * The data needed to update a medical_record.
     */
    data: XOR<medical_recordUpdateInput, medical_recordUncheckedUpdateInput>;
    /**
     * Choose, which medical_record to update.
     */
    where: medical_recordWhereUniqueInput;
  };

  /**
   * medical_record updateMany
   */
  export type medical_recordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update medical_records.
     */
    data: XOR<medical_recordUpdateManyMutationInput, medical_recordUncheckedUpdateManyInput>;
    /**
     * Filter which medical_records to update
     */
    where?: medical_recordWhereInput;
  };

  /**
   * medical_record upsert
   */
  export type medical_recordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * The filter to search for the medical_record to update in case it exists.
     */
    where: medical_recordWhereUniqueInput;
    /**
     * In case the medical_record found by the `where` argument doesn't exist, create a new medical_record with this data.
     */
    create: XOR<medical_recordCreateInput, medical_recordUncheckedCreateInput>;
    /**
     * In case the medical_record was found with the provided `where` argument, update it with this data.
     */
    update: XOR<medical_recordUpdateInput, medical_recordUncheckedUpdateInput>;
  };

  /**
   * medical_record delete
   */
  export type medical_recordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    /**
     * Filter which medical_record to delete.
     */
    where: medical_recordWhereUniqueInput;
  };

  /**
   * medical_record deleteMany
   */
  export type medical_recordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which medical_records to delete
     */
    where?: medical_recordWhereInput;
  };

  /**
   * medical_record without action
   */
  export type medical_recordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
  };

  /**
   * Model user
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  export type UserMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string | null;
    tenant_id: string | null;
    created_at: Date | null;
    updated_at: Date | null;
  };

  export type UserCountAggregateOutputType = {
    id: number;
    email: number;
    firstName: number;
    lastName: number;
    roq_user_id: number;
    tenant_id: number;
    created_at: number;
    updated_at: number;
    _all: number;
  };

  export type UserMinAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserMaxAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
  };

  export type UserCountAggregateInputType = {
    id?: true;
    email?: true;
    firstName?: true;
    lastName?: true;
    roq_user_id?: true;
    tenant_id?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
  };

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which user to aggregate.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned users
     **/
    _count?: true | UserCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
     **/
    _min?: UserMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
     **/
    _max?: UserMaxAggregateInputType;
  };

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>;
  };

  export type userGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: userWhereInput;
    orderBy?: userOrderByWithAggregationInput | userOrderByWithAggregationInput[];
    by: UserScalarFieldEnum[] | UserScalarFieldEnum;
    having?: userScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
  };

  export type UserGroupByOutputType = {
    id: string;
    email: string;
    firstName: string | null;
    lastName: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
  };

  type GetUserGroupByPayload<T extends userGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> & {
        [P in keyof T & keyof UserGroupByOutputType]: P extends '_count'
          ? T[P] extends boolean
            ? number
            : GetScalarType<T[P], UserGroupByOutputType[P]>
          : GetScalarType<T[P], UserGroupByOutputType[P]>;
      }
    >
  >;

  export type userSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<
    {
      id?: boolean;
      email?: boolean;
      firstName?: boolean;
      lastName?: boolean;
      roq_user_id?: boolean;
      tenant_id?: boolean;
      created_at?: boolean;
      updated_at?: boolean;
      appointment_appointment_healthcare_provider_idTouser?:
        | boolean
        | user$appointment_appointment_healthcare_provider_idTouserArgs<ExtArgs>;
      appointment_appointment_patient_idTouser?: boolean | user$appointment_appointment_patient_idTouserArgs<ExtArgs>;
      billing?: boolean | user$billingArgs<ExtArgs>;
      clinic?: boolean | user$clinicArgs<ExtArgs>;
      insurance_provider?: boolean | user$insurance_providerArgs<ExtArgs>;
      invoice?: boolean | user$invoiceArgs<ExtArgs>;
      medical_record?: boolean | user$medical_recordArgs<ExtArgs>;
      _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
    },
    ExtArgs['result']['user']
  >;

  export type userSelectScalar = {
    id?: boolean;
    email?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    roq_user_id?: boolean;
    tenant_id?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
  };

  export type userInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    appointment_appointment_healthcare_provider_idTouser?:
      | boolean
      | user$appointment_appointment_healthcare_provider_idTouserArgs<ExtArgs>;
    appointment_appointment_patient_idTouser?: boolean | user$appointment_appointment_patient_idTouserArgs<ExtArgs>;
    billing?: boolean | user$billingArgs<ExtArgs>;
    clinic?: boolean | user$clinicArgs<ExtArgs>;
    insurance_provider?: boolean | user$insurance_providerArgs<ExtArgs>;
    invoice?: boolean | user$invoiceArgs<ExtArgs>;
    medical_record?: boolean | user$medical_recordArgs<ExtArgs>;
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>;
  };

  export type $userPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: 'user';
    objects: {
      appointment_appointment_healthcare_provider_idTouser: Prisma.$appointmentPayload<ExtArgs>[];
      appointment_appointment_patient_idTouser: Prisma.$appointmentPayload<ExtArgs>[];
      billing: Prisma.$billingPayload<ExtArgs>[];
      clinic: Prisma.$clinicPayload<ExtArgs>[];
      insurance_provider: Prisma.$insurance_providerPayload<ExtArgs>[];
      invoice: Prisma.$invoicePayload<ExtArgs>[];
      medical_record: Prisma.$medical_recordPayload<ExtArgs>[];
    };
    scalars: $Extensions.GetPayloadResult<
      {
        id: string;
        email: string;
        firstName: string | null;
        lastName: string | null;
        roq_user_id: string;
        tenant_id: string;
        created_at: Date;
        updated_at: Date;
      },
      ExtArgs['result']['user']
    >;
    composites: {};
  };

  type userGetPayload<S extends boolean | null | undefined | userDefaultArgs> = $Result.GetResult<
    Prisma.$userPayload,
    S
  >;

  type userCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = Omit<
    userFindManyArgs,
    'select' | 'include'
  > & {
    select?: UserCountAggregateInputType | true;
  };

  export interface userDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['user']; meta: { name: 'user' } };
    /**
     * Find zero or one User that matches the filter.
     * @param {userFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUnique<T extends userFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, userFindUniqueArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>;

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'`
     *     if no matches were found.
     * @param {userFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findUniqueOrThrow<T extends userFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindUniqueOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>;

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirst<T extends userFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>;

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     **/
    findFirstOrThrow<T extends userFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindFirstOrThrowArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>;

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     *
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     *
     **/
    findMany<T extends userFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userFindManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'findMany'>>;

    /**
     * Create a User.
     * @param {userCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     *
     **/
    create<T extends userCreateArgs<ExtArgs>>(
      args: SelectSubset<T, userCreateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'create'>, never, ExtArgs>;

    /**
     * Create many Users.
     *     @param {userCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *
     **/
    createMany<T extends userCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userCreateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Delete a User.
     * @param {userDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     *
     **/
    delete<T extends userDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, userDeleteArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>;

    /**
     * Update one User.
     * @param {userUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    update<T extends userUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'update'>, never, ExtArgs>;

    /**
     * Delete zero or more Users.
     * @param {userDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     **/
    deleteMany<T extends userDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, userDeleteManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     **/
    updateMany<T extends userUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, userUpdateManyArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<BatchPayload>;

    /**
     * Create or update one User.
     * @param {userUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     **/
    upsert<T extends userUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, userUpsertArgs<ExtArgs>>,
    ): Prisma__userClient<$Result.GetResult<Prisma.$userPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>;

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
     **/
    count<T extends userCountArgs>(
      args?: Subset<T, userCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >;

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
     **/
    aggregate<T extends UserAggregateArgs>(
      args: Subset<T, UserAggregateArgs>,
    ): Prisma.PrismaPromise<GetUserAggregateType<T>>;

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {userGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
     **/
    groupBy<
      T extends userGroupByArgs,
      HasSelectOrTake extends Or<Extends<'skip', Keys<T>>, Extends<'take', Keys<T>>>,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: userGroupByArgs['orderBy'] }
        : { orderBy?: userGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
        ? `Error: "by" must not be empty.`
        : HavingValid extends False
        ? {
            [P in HavingFields]: P extends ByFields
              ? never
              : P extends string
              ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
              : [Error, 'Field ', P, ` in "having" needs to be provided in "by"`];
          }[HavingFields]
        : 'take' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "take", you also need to provide "orderBy"'
        : 'skip' extends Keys<T>
        ? 'orderBy' extends Keys<T>
          ? ByValid extends True
            ? {}
            : {
                [P in OrderFields]: P extends ByFields
                  ? never
                  : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
              }[OrderFields]
          : 'Error: If you provide "skip", you also need to provide "orderBy"'
        : ByValid extends True
        ? {}
        : {
            [P in OrderFields]: P extends ByFields
              ? never
              : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
          }[OrderFields],
    >(
      args: SubsetIntersection<T, userGroupByArgs, OrderByArg> & InputErrors,
    ): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the user model
     */
    readonly fields: userFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for user.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__userClient<
    T,
    Null = never,
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    appointment_appointment_healthcare_provider_idTouser<
      T extends user$appointment_appointment_healthcare_provider_idTouserArgs<ExtArgs> = {},
    >(
      args?: Subset<T, user$appointment_appointment_healthcare_provider_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    appointment_appointment_patient_idTouser<T extends user$appointment_appointment_patient_idTouserArgs<ExtArgs> = {}>(
      args?: Subset<T, user$appointment_appointment_patient_idTouserArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$appointmentPayload<ExtArgs>, T, 'findMany'> | Null>;

    billing<T extends user$billingArgs<ExtArgs> = {}>(
      args?: Subset<T, user$billingArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$billingPayload<ExtArgs>, T, 'findMany'> | Null>;

    clinic<T extends user$clinicArgs<ExtArgs> = {}>(
      args?: Subset<T, user$clinicArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$clinicPayload<ExtArgs>, T, 'findMany'> | Null>;

    insurance_provider<T extends user$insurance_providerArgs<ExtArgs> = {}>(
      args?: Subset<T, user$insurance_providerArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$insurance_providerPayload<ExtArgs>, T, 'findMany'> | Null>;

    invoice<T extends user$invoiceArgs<ExtArgs> = {}>(
      args?: Subset<T, user$invoiceArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$invoicePayload<ExtArgs>, T, 'findMany'> | Null>;

    medical_record<T extends user$medical_recordArgs<ExtArgs> = {}>(
      args?: Subset<T, user$medical_recordArgs<ExtArgs>>,
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$medical_recordPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(
      onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
      onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null,
    ): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(
      onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null,
    ): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }

  /**
   * Fields of the user model
   */
  interface userFieldRefs {
    readonly id: FieldRef<'user', 'String'>;
    readonly email: FieldRef<'user', 'String'>;
    readonly firstName: FieldRef<'user', 'String'>;
    readonly lastName: FieldRef<'user', 'String'>;
    readonly roq_user_id: FieldRef<'user', 'String'>;
    readonly tenant_id: FieldRef<'user', 'String'>;
    readonly created_at: FieldRef<'user', 'DateTime'>;
    readonly updated_at: FieldRef<'user', 'DateTime'>;
  }

  // Custom InputTypes

  /**
   * user findUnique
   */
  export type userFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findUniqueOrThrow
   */
  export type userFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user findFirst
   */
  export type userFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findFirstOrThrow
   */
  export type userFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which user to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user findMany
   */
  export type userFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter, which users to fetch.
     */
    where?: userWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of users to fetch.
     */
    orderBy?: userOrderByWithRelationInput | userOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing users.
     */
    cursor?: userWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` users from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` users.
     */
    skip?: number;
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[];
  };

  /**
   * user create
   */
  export type userCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to create a user.
     */
    data: XOR<userCreateInput, userUncheckedCreateInput>;
  };

  /**
   * user createMany
   */
  export type userCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: userCreateManyInput | userCreateManyInput[];
    skipDuplicates?: boolean;
  };

  /**
   * user update
   */
  export type userUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The data needed to update a user.
     */
    data: XOR<userUpdateInput, userUncheckedUpdateInput>;
    /**
     * Choose, which user to update.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user updateMany
   */
  export type userUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<userUpdateManyMutationInput, userUncheckedUpdateManyInput>;
    /**
     * Filter which users to update
     */
    where?: userWhereInput;
  };

  /**
   * user upsert
   */
  export type userUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * The filter to search for the user to update in case it exists.
     */
    where: userWhereUniqueInput;
    /**
     * In case the user found by the `where` argument doesn't exist, create a new user with this data.
     */
    create: XOR<userCreateInput, userUncheckedCreateInput>;
    /**
     * In case the user was found with the provided `where` argument, update it with this data.
     */
    update: XOR<userUpdateInput, userUncheckedUpdateInput>;
  };

  /**
   * user delete
   */
  export type userDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
    /**
     * Filter which user to delete.
     */
    where: userWhereUniqueInput;
  };

  /**
   * user deleteMany
   */
  export type userDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: userWhereInput;
  };

  /**
   * user.appointment_appointment_healthcare_provider_idTouser
   */
  export type user$appointment_appointment_healthcare_provider_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * user.appointment_appointment_patient_idTouser
   */
  export type user$appointment_appointment_patient_idTouserArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = {
    /**
     * Select specific fields to fetch from the appointment
     */
    select?: appointmentSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: appointmentInclude<ExtArgs> | null;
    where?: appointmentWhereInput;
    orderBy?: appointmentOrderByWithRelationInput | appointmentOrderByWithRelationInput[];
    cursor?: appointmentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: AppointmentScalarFieldEnum | AppointmentScalarFieldEnum[];
  };

  /**
   * user.billing
   */
  export type user$billingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the billing
     */
    select?: billingSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: billingInclude<ExtArgs> | null;
    where?: billingWhereInput;
    orderBy?: billingOrderByWithRelationInput | billingOrderByWithRelationInput[];
    cursor?: billingWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: BillingScalarFieldEnum | BillingScalarFieldEnum[];
  };

  /**
   * user.clinic
   */
  export type user$clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the clinic
     */
    select?: clinicSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: clinicInclude<ExtArgs> | null;
    where?: clinicWhereInput;
    orderBy?: clinicOrderByWithRelationInput | clinicOrderByWithRelationInput[];
    cursor?: clinicWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: ClinicScalarFieldEnum | ClinicScalarFieldEnum[];
  };

  /**
   * user.insurance_provider
   */
  export type user$insurance_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the insurance_provider
     */
    select?: insurance_providerSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: insurance_providerInclude<ExtArgs> | null;
    where?: insurance_providerWhereInput;
    orderBy?: insurance_providerOrderByWithRelationInput | insurance_providerOrderByWithRelationInput[];
    cursor?: insurance_providerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Insurance_providerScalarFieldEnum | Insurance_providerScalarFieldEnum[];
  };

  /**
   * user.invoice
   */
  export type user$invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the invoice
     */
    select?: invoiceSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: invoiceInclude<ExtArgs> | null;
    where?: invoiceWhereInput;
    orderBy?: invoiceOrderByWithRelationInput | invoiceOrderByWithRelationInput[];
    cursor?: invoiceWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: InvoiceScalarFieldEnum | InvoiceScalarFieldEnum[];
  };

  /**
   * user.medical_record
   */
  export type user$medical_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the medical_record
     */
    select?: medical_recordSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: medical_recordInclude<ExtArgs> | null;
    where?: medical_recordWhereInput;
    orderBy?: medical_recordOrderByWithRelationInput | medical_recordOrderByWithRelationInput[];
    cursor?: medical_recordWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Medical_recordScalarFieldEnum | Medical_recordScalarFieldEnum[];
  };

  /**
   * user without action
   */
  export type userDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the user
     */
    select?: userSelect<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: userInclude<ExtArgs> | null;
  };

  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted';
    ReadCommitted: 'ReadCommitted';
    RepeatableRead: 'RepeatableRead';
    Serializable: 'Serializable';
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];

  export const AppointmentScalarFieldEnum: {
    id: 'id';
    appointment_date: 'appointment_date';
    appointment_time: 'appointment_time';
    status: 'status';
    patient_id: 'patient_id';
    clinic_id: 'clinic_id';
    healthcare_provider_id: 'healthcare_provider_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];

  export const BillingScalarFieldEnum: {
    id: 'id';
    billing_date: 'billing_date';
    total_amount: 'total_amount';
    status: 'status';
    appointment_id: 'appointment_id';
    patient_id: 'patient_id';
    insurance_provider_id: 'insurance_provider_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type BillingScalarFieldEnum = (typeof BillingScalarFieldEnum)[keyof typeof BillingScalarFieldEnum];

  export const ClinicScalarFieldEnum: {
    id: 'id';
    description: 'description';
    location: 'location';
    opening_hours: 'opening_hours';
    closing_hours: 'closing_hours';
    name: 'name';
    created_at: 'created_at';
    updated_at: 'updated_at';
    user_id: 'user_id';
    tenant_id: 'tenant_id';
  };

  export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum];

  export const Insurance_providerScalarFieldEnum: {
    id: 'id';
    name: 'name';
    contact_number: 'contact_number';
    address: 'address';
    email: 'email';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Insurance_providerScalarFieldEnum =
    (typeof Insurance_providerScalarFieldEnum)[keyof typeof Insurance_providerScalarFieldEnum];

  export const InvoiceScalarFieldEnum: {
    id: 'id';
    payment_method: 'payment_method';
    invoice_status: 'invoice_status';
    user_id: 'user_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type InvoiceScalarFieldEnum = (typeof InvoiceScalarFieldEnum)[keyof typeof InvoiceScalarFieldEnum];

  export const Medical_recordScalarFieldEnum: {
    id: 'id';
    diagnosis: 'diagnosis';
    prescription: 'prescription';
    notes: 'notes';
    appointment_id: 'appointment_id';
    patient_id: 'patient_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type Medical_recordScalarFieldEnum =
    (typeof Medical_recordScalarFieldEnum)[keyof typeof Medical_recordScalarFieldEnum];

  export const UserScalarFieldEnum: {
    id: 'id';
    email: 'email';
    firstName: 'firstName';
    lastName: 'lastName';
    roq_user_id: 'roq_user_id';
    tenant_id: 'tenant_id';
    created_at: 'created_at';
    updated_at: 'updated_at';
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];

  export const SortOrder: {
    asc: 'asc';
    desc: 'desc';
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

  export const QueryMode: {
    default: 'default';
    insensitive: 'insensitive';
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];

  export const NullsOrder: {
    first: 'first';
    last: 'last';
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];

  /**
   * Field references
   */

  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;

  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;

  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;

  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;

  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;

  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;

  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;

  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;

  /**
   * Deep Input Types
   */

  export type appointmentWhereInput = {
    AND?: appointmentWhereInput | appointmentWhereInput[];
    OR?: appointmentWhereInput[];
    NOT?: appointmentWhereInput | appointmentWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    appointment_date?: DateTimeFilter<'appointment'> | Date | string;
    appointment_time?: StringFilter<'appointment'> | string;
    status?: StringFilter<'appointment'> | string;
    patient_id?: UuidFilter<'appointment'> | string;
    clinic_id?: UuidFilter<'appointment'> | string;
    healthcare_provider_id?: UuidFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
    clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
    user_appointment_healthcare_provider_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    user_appointment_patient_idTouser?: XOR<UserRelationFilter, userWhereInput>;
    billing?: BillingListRelationFilter;
    medical_record?: Medical_recordListRelationFilter;
  };

  export type appointmentOrderByWithRelationInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    appointment_time?: SortOrder;
    status?: SortOrder;
    patient_id?: SortOrder;
    clinic_id?: SortOrder;
    healthcare_provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    clinic?: clinicOrderByWithRelationInput;
    user_appointment_healthcare_provider_idTouser?: userOrderByWithRelationInput;
    user_appointment_patient_idTouser?: userOrderByWithRelationInput;
    billing?: billingOrderByRelationAggregateInput;
    medical_record?: medical_recordOrderByRelationAggregateInput;
  };

  export type appointmentWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: appointmentWhereInput | appointmentWhereInput[];
      OR?: appointmentWhereInput[];
      NOT?: appointmentWhereInput | appointmentWhereInput[];
      appointment_date?: DateTimeFilter<'appointment'> | Date | string;
      appointment_time?: StringFilter<'appointment'> | string;
      status?: StringFilter<'appointment'> | string;
      patient_id?: UuidFilter<'appointment'> | string;
      clinic_id?: UuidFilter<'appointment'> | string;
      healthcare_provider_id?: UuidFilter<'appointment'> | string;
      created_at?: DateTimeFilter<'appointment'> | Date | string;
      updated_at?: DateTimeFilter<'appointment'> | Date | string;
      clinic?: XOR<ClinicRelationFilter, clinicWhereInput>;
      user_appointment_healthcare_provider_idTouser?: XOR<UserRelationFilter, userWhereInput>;
      user_appointment_patient_idTouser?: XOR<UserRelationFilter, userWhereInput>;
      billing?: BillingListRelationFilter;
      medical_record?: Medical_recordListRelationFilter;
    },
    'id'
  >;

  export type appointmentOrderByWithAggregationInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    appointment_time?: SortOrder;
    status?: SortOrder;
    patient_id?: SortOrder;
    clinic_id?: SortOrder;
    healthcare_provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: appointmentCountOrderByAggregateInput;
    _max?: appointmentMaxOrderByAggregateInput;
    _min?: appointmentMinOrderByAggregateInput;
  };

  export type appointmentScalarWhereWithAggregatesInput = {
    AND?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    OR?: appointmentScalarWhereWithAggregatesInput[];
    NOT?: appointmentScalarWhereWithAggregatesInput | appointmentScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'appointment'> | string;
    appointment_date?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    appointment_time?: StringWithAggregatesFilter<'appointment'> | string;
    status?: StringWithAggregatesFilter<'appointment'> | string;
    patient_id?: UuidWithAggregatesFilter<'appointment'> | string;
    clinic_id?: UuidWithAggregatesFilter<'appointment'> | string;
    healthcare_provider_id?: UuidWithAggregatesFilter<'appointment'> | string;
    created_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'appointment'> | Date | string;
  };

  export type billingWhereInput = {
    AND?: billingWhereInput | billingWhereInput[];
    OR?: billingWhereInput[];
    NOT?: billingWhereInput | billingWhereInput[];
    id?: UuidFilter<'billing'> | string;
    billing_date?: DateTimeFilter<'billing'> | Date | string;
    total_amount?: IntFilter<'billing'> | number;
    status?: StringFilter<'billing'> | string;
    appointment_id?: UuidFilter<'billing'> | string;
    patient_id?: UuidFilter<'billing'> | string;
    insurance_provider_id?: UuidFilter<'billing'> | string;
    created_at?: DateTimeFilter<'billing'> | Date | string;
    updated_at?: DateTimeFilter<'billing'> | Date | string;
    appointment?: XOR<AppointmentRelationFilter, appointmentWhereInput>;
    insurance_provider?: XOR<Insurance_providerRelationFilter, insurance_providerWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type billingOrderByWithRelationInput = {
    id?: SortOrder;
    billing_date?: SortOrder;
    total_amount?: SortOrder;
    status?: SortOrder;
    appointment_id?: SortOrder;
    patient_id?: SortOrder;
    insurance_provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByWithRelationInput;
    insurance_provider?: insurance_providerOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type billingWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: billingWhereInput | billingWhereInput[];
      OR?: billingWhereInput[];
      NOT?: billingWhereInput | billingWhereInput[];
      billing_date?: DateTimeFilter<'billing'> | Date | string;
      total_amount?: IntFilter<'billing'> | number;
      status?: StringFilter<'billing'> | string;
      appointment_id?: UuidFilter<'billing'> | string;
      patient_id?: UuidFilter<'billing'> | string;
      insurance_provider_id?: UuidFilter<'billing'> | string;
      created_at?: DateTimeFilter<'billing'> | Date | string;
      updated_at?: DateTimeFilter<'billing'> | Date | string;
      appointment?: XOR<AppointmentRelationFilter, appointmentWhereInput>;
      insurance_provider?: XOR<Insurance_providerRelationFilter, insurance_providerWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type billingOrderByWithAggregationInput = {
    id?: SortOrder;
    billing_date?: SortOrder;
    total_amount?: SortOrder;
    status?: SortOrder;
    appointment_id?: SortOrder;
    patient_id?: SortOrder;
    insurance_provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: billingCountOrderByAggregateInput;
    _avg?: billingAvgOrderByAggregateInput;
    _max?: billingMaxOrderByAggregateInput;
    _min?: billingMinOrderByAggregateInput;
    _sum?: billingSumOrderByAggregateInput;
  };

  export type billingScalarWhereWithAggregatesInput = {
    AND?: billingScalarWhereWithAggregatesInput | billingScalarWhereWithAggregatesInput[];
    OR?: billingScalarWhereWithAggregatesInput[];
    NOT?: billingScalarWhereWithAggregatesInput | billingScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'billing'> | string;
    billing_date?: DateTimeWithAggregatesFilter<'billing'> | Date | string;
    total_amount?: IntWithAggregatesFilter<'billing'> | number;
    status?: StringWithAggregatesFilter<'billing'> | string;
    appointment_id?: UuidWithAggregatesFilter<'billing'> | string;
    patient_id?: UuidWithAggregatesFilter<'billing'> | string;
    insurance_provider_id?: UuidWithAggregatesFilter<'billing'> | string;
    created_at?: DateTimeWithAggregatesFilter<'billing'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'billing'> | Date | string;
  };

  export type clinicWhereInput = {
    AND?: clinicWhereInput | clinicWhereInput[];
    OR?: clinicWhereInput[];
    NOT?: clinicWhereInput | clinicWhereInput[];
    id?: UuidFilter<'clinic'> | string;
    description?: StringNullableFilter<'clinic'> | string | null;
    location?: StringNullableFilter<'clinic'> | string | null;
    opening_hours?: StringNullableFilter<'clinic'> | string | null;
    closing_hours?: StringNullableFilter<'clinic'> | string | null;
    name?: StringFilter<'clinic'> | string;
    created_at?: DateTimeFilter<'clinic'> | Date | string;
    updated_at?: DateTimeFilter<'clinic'> | Date | string;
    user_id?: UuidFilter<'clinic'> | string;
    tenant_id?: StringFilter<'clinic'> | string;
    appointment?: AppointmentListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type clinicOrderByWithRelationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    closing_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    appointment?: appointmentOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type clinicWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: clinicWhereInput | clinicWhereInput[];
      OR?: clinicWhereInput[];
      NOT?: clinicWhereInput | clinicWhereInput[];
      description?: StringNullableFilter<'clinic'> | string | null;
      location?: StringNullableFilter<'clinic'> | string | null;
      opening_hours?: StringNullableFilter<'clinic'> | string | null;
      closing_hours?: StringNullableFilter<'clinic'> | string | null;
      name?: StringFilter<'clinic'> | string;
      created_at?: DateTimeFilter<'clinic'> | Date | string;
      updated_at?: DateTimeFilter<'clinic'> | Date | string;
      user_id?: UuidFilter<'clinic'> | string;
      tenant_id?: StringFilter<'clinic'> | string;
      appointment?: AppointmentListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type clinicOrderByWithAggregationInput = {
    id?: SortOrder;
    description?: SortOrderInput | SortOrder;
    location?: SortOrderInput | SortOrder;
    opening_hours?: SortOrderInput | SortOrder;
    closing_hours?: SortOrderInput | SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
    _count?: clinicCountOrderByAggregateInput;
    _max?: clinicMaxOrderByAggregateInput;
    _min?: clinicMinOrderByAggregateInput;
  };

  export type clinicScalarWhereWithAggregatesInput = {
    AND?: clinicScalarWhereWithAggregatesInput | clinicScalarWhereWithAggregatesInput[];
    OR?: clinicScalarWhereWithAggregatesInput[];
    NOT?: clinicScalarWhereWithAggregatesInput | clinicScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'clinic'> | string;
    description?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    location?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    opening_hours?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    closing_hours?: StringNullableWithAggregatesFilter<'clinic'> | string | null;
    name?: StringWithAggregatesFilter<'clinic'> | string;
    created_at?: DateTimeWithAggregatesFilter<'clinic'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'clinic'> | Date | string;
    user_id?: UuidWithAggregatesFilter<'clinic'> | string;
    tenant_id?: StringWithAggregatesFilter<'clinic'> | string;
  };

  export type insurance_providerWhereInput = {
    AND?: insurance_providerWhereInput | insurance_providerWhereInput[];
    OR?: insurance_providerWhereInput[];
    NOT?: insurance_providerWhereInput | insurance_providerWhereInput[];
    id?: UuidFilter<'insurance_provider'> | string;
    name?: StringFilter<'insurance_provider'> | string;
    contact_number?: StringFilter<'insurance_provider'> | string;
    address?: StringFilter<'insurance_provider'> | string;
    email?: StringFilter<'insurance_provider'> | string;
    user_id?: UuidFilter<'insurance_provider'> | string;
    created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    billing?: BillingListRelationFilter;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type insurance_providerOrderByWithRelationInput = {
    id?: SortOrder;
    name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    email?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    billing?: billingOrderByRelationAggregateInput;
    user?: userOrderByWithRelationInput;
  };

  export type insurance_providerWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: insurance_providerWhereInput | insurance_providerWhereInput[];
      OR?: insurance_providerWhereInput[];
      NOT?: insurance_providerWhereInput | insurance_providerWhereInput[];
      name?: StringFilter<'insurance_provider'> | string;
      contact_number?: StringFilter<'insurance_provider'> | string;
      address?: StringFilter<'insurance_provider'> | string;
      email?: StringFilter<'insurance_provider'> | string;
      user_id?: UuidFilter<'insurance_provider'> | string;
      created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
      updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
      billing?: BillingListRelationFilter;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type insurance_providerOrderByWithAggregationInput = {
    id?: SortOrder;
    name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    email?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: insurance_providerCountOrderByAggregateInput;
    _max?: insurance_providerMaxOrderByAggregateInput;
    _min?: insurance_providerMinOrderByAggregateInput;
  };

  export type insurance_providerScalarWhereWithAggregatesInput = {
    AND?: insurance_providerScalarWhereWithAggregatesInput | insurance_providerScalarWhereWithAggregatesInput[];
    OR?: insurance_providerScalarWhereWithAggregatesInput[];
    NOT?: insurance_providerScalarWhereWithAggregatesInput | insurance_providerScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'insurance_provider'> | string;
    name?: StringWithAggregatesFilter<'insurance_provider'> | string;
    contact_number?: StringWithAggregatesFilter<'insurance_provider'> | string;
    address?: StringWithAggregatesFilter<'insurance_provider'> | string;
    email?: StringWithAggregatesFilter<'insurance_provider'> | string;
    user_id?: UuidWithAggregatesFilter<'insurance_provider'> | string;
    created_at?: DateTimeWithAggregatesFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'insurance_provider'> | Date | string;
  };

  export type invoiceWhereInput = {
    AND?: invoiceWhereInput | invoiceWhereInput[];
    OR?: invoiceWhereInput[];
    NOT?: invoiceWhereInput | invoiceWhereInput[];
    id?: UuidFilter<'invoice'> | string;
    payment_method?: StringNullableFilter<'invoice'> | string | null;
    invoice_status?: StringNullableFilter<'invoice'> | string | null;
    user_id?: UuidFilter<'invoice'> | string;
    created_at?: DateTimeFilter<'invoice'> | Date | string;
    updated_at?: DateTimeFilter<'invoice'> | Date | string;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type invoiceOrderByWithRelationInput = {
    id?: SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    invoice_status?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user?: userOrderByWithRelationInput;
  };

  export type invoiceWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: invoiceWhereInput | invoiceWhereInput[];
      OR?: invoiceWhereInput[];
      NOT?: invoiceWhereInput | invoiceWhereInput[];
      payment_method?: StringNullableFilter<'invoice'> | string | null;
      invoice_status?: StringNullableFilter<'invoice'> | string | null;
      user_id?: UuidFilter<'invoice'> | string;
      created_at?: DateTimeFilter<'invoice'> | Date | string;
      updated_at?: DateTimeFilter<'invoice'> | Date | string;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type invoiceOrderByWithAggregationInput = {
    id?: SortOrder;
    payment_method?: SortOrderInput | SortOrder;
    invoice_status?: SortOrderInput | SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: invoiceCountOrderByAggregateInput;
    _max?: invoiceMaxOrderByAggregateInput;
    _min?: invoiceMinOrderByAggregateInput;
  };

  export type invoiceScalarWhereWithAggregatesInput = {
    AND?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[];
    OR?: invoiceScalarWhereWithAggregatesInput[];
    NOT?: invoiceScalarWhereWithAggregatesInput | invoiceScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'invoice'> | string;
    payment_method?: StringNullableWithAggregatesFilter<'invoice'> | string | null;
    invoice_status?: StringNullableWithAggregatesFilter<'invoice'> | string | null;
    user_id?: UuidWithAggregatesFilter<'invoice'> | string;
    created_at?: DateTimeWithAggregatesFilter<'invoice'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'invoice'> | Date | string;
  };

  export type medical_recordWhereInput = {
    AND?: medical_recordWhereInput | medical_recordWhereInput[];
    OR?: medical_recordWhereInput[];
    NOT?: medical_recordWhereInput | medical_recordWhereInput[];
    id?: UuidFilter<'medical_record'> | string;
    diagnosis?: StringFilter<'medical_record'> | string;
    prescription?: StringFilter<'medical_record'> | string;
    notes?: StringNullableFilter<'medical_record'> | string | null;
    appointment_id?: UuidFilter<'medical_record'> | string;
    patient_id?: UuidFilter<'medical_record'> | string;
    created_at?: DateTimeFilter<'medical_record'> | Date | string;
    updated_at?: DateTimeFilter<'medical_record'> | Date | string;
    appointment?: XOR<AppointmentRelationFilter, appointmentWhereInput>;
    user?: XOR<UserRelationFilter, userWhereInput>;
  };

  export type medical_recordOrderByWithRelationInput = {
    id?: SortOrder;
    diagnosis?: SortOrder;
    prescription?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    appointment_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment?: appointmentOrderByWithRelationInput;
    user?: userOrderByWithRelationInput;
  };

  export type medical_recordWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      AND?: medical_recordWhereInput | medical_recordWhereInput[];
      OR?: medical_recordWhereInput[];
      NOT?: medical_recordWhereInput | medical_recordWhereInput[];
      diagnosis?: StringFilter<'medical_record'> | string;
      prescription?: StringFilter<'medical_record'> | string;
      notes?: StringNullableFilter<'medical_record'> | string | null;
      appointment_id?: UuidFilter<'medical_record'> | string;
      patient_id?: UuidFilter<'medical_record'> | string;
      created_at?: DateTimeFilter<'medical_record'> | Date | string;
      updated_at?: DateTimeFilter<'medical_record'> | Date | string;
      appointment?: XOR<AppointmentRelationFilter, appointmentWhereInput>;
      user?: XOR<UserRelationFilter, userWhereInput>;
    },
    'id'
  >;

  export type medical_recordOrderByWithAggregationInput = {
    id?: SortOrder;
    diagnosis?: SortOrder;
    prescription?: SortOrder;
    notes?: SortOrderInput | SortOrder;
    appointment_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: medical_recordCountOrderByAggregateInput;
    _max?: medical_recordMaxOrderByAggregateInput;
    _min?: medical_recordMinOrderByAggregateInput;
  };

  export type medical_recordScalarWhereWithAggregatesInput = {
    AND?: medical_recordScalarWhereWithAggregatesInput | medical_recordScalarWhereWithAggregatesInput[];
    OR?: medical_recordScalarWhereWithAggregatesInput[];
    NOT?: medical_recordScalarWhereWithAggregatesInput | medical_recordScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'medical_record'> | string;
    diagnosis?: StringWithAggregatesFilter<'medical_record'> | string;
    prescription?: StringWithAggregatesFilter<'medical_record'> | string;
    notes?: StringNullableWithAggregatesFilter<'medical_record'> | string | null;
    appointment_id?: UuidWithAggregatesFilter<'medical_record'> | string;
    patient_id?: UuidWithAggregatesFilter<'medical_record'> | string;
    created_at?: DateTimeWithAggregatesFilter<'medical_record'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'medical_record'> | Date | string;
  };

  export type userWhereInput = {
    AND?: userWhereInput | userWhereInput[];
    OR?: userWhereInput[];
    NOT?: userWhereInput | userWhereInput[];
    id?: UuidFilter<'user'> | string;
    email?: StringFilter<'user'> | string;
    firstName?: StringNullableFilter<'user'> | string | null;
    lastName?: StringNullableFilter<'user'> | string | null;
    roq_user_id?: StringFilter<'user'> | string;
    tenant_id?: StringFilter<'user'> | string;
    created_at?: DateTimeFilter<'user'> | Date | string;
    updated_at?: DateTimeFilter<'user'> | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: AppointmentListRelationFilter;
    appointment_appointment_patient_idTouser?: AppointmentListRelationFilter;
    billing?: BillingListRelationFilter;
    clinic?: ClinicListRelationFilter;
    insurance_provider?: Insurance_providerListRelationFilter;
    invoice?: InvoiceListRelationFilter;
    medical_record?: Medical_recordListRelationFilter;
  };

  export type userOrderByWithRelationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    appointment_appointment_healthcare_provider_idTouser?: appointmentOrderByRelationAggregateInput;
    appointment_appointment_patient_idTouser?: appointmentOrderByRelationAggregateInput;
    billing?: billingOrderByRelationAggregateInput;
    clinic?: clinicOrderByRelationAggregateInput;
    insurance_provider?: insurance_providerOrderByRelationAggregateInput;
    invoice?: invoiceOrderByRelationAggregateInput;
    medical_record?: medical_recordOrderByRelationAggregateInput;
  };

  export type userWhereUniqueInput = Prisma.AtLeast<
    {
      id?: string;
      email?: string;
      AND?: userWhereInput | userWhereInput[];
      OR?: userWhereInput[];
      NOT?: userWhereInput | userWhereInput[];
      firstName?: StringNullableFilter<'user'> | string | null;
      lastName?: StringNullableFilter<'user'> | string | null;
      roq_user_id?: StringFilter<'user'> | string;
      tenant_id?: StringFilter<'user'> | string;
      created_at?: DateTimeFilter<'user'> | Date | string;
      updated_at?: DateTimeFilter<'user'> | Date | string;
      appointment_appointment_healthcare_provider_idTouser?: AppointmentListRelationFilter;
      appointment_appointment_patient_idTouser?: AppointmentListRelationFilter;
      billing?: BillingListRelationFilter;
      clinic?: ClinicListRelationFilter;
      insurance_provider?: Insurance_providerListRelationFilter;
      invoice?: InvoiceListRelationFilter;
      medical_record?: Medical_recordListRelationFilter;
    },
    'id' | 'email'
  >;

  export type userOrderByWithAggregationInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrderInput | SortOrder;
    lastName?: SortOrderInput | SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    _count?: userCountOrderByAggregateInput;
    _max?: userMaxOrderByAggregateInput;
    _min?: userMinOrderByAggregateInput;
  };

  export type userScalarWhereWithAggregatesInput = {
    AND?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    OR?: userScalarWhereWithAggregatesInput[];
    NOT?: userScalarWhereWithAggregatesInput | userScalarWhereWithAggregatesInput[];
    id?: UuidWithAggregatesFilter<'user'> | string;
    email?: StringWithAggregatesFilter<'user'> | string;
    firstName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    lastName?: StringNullableWithAggregatesFilter<'user'> | string | null;
    roq_user_id?: StringWithAggregatesFilter<'user'> | string;
    tenant_id?: StringWithAggregatesFilter<'user'> | string;
    created_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
    updated_at?: DateTimeWithAggregatesFilter<'user'> | Date | string;
  };

  export type appointmentCreateInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    user_appointment_healthcare_provider_idTouser: userCreateNestedOneWithoutAppointment_appointment_healthcare_provider_idTouserInput;
    user_appointment_patient_idTouser: userCreateNestedOneWithoutAppointment_appointment_patient_idTouserInput;
    billing?: billingCreateNestedManyWithoutAppointmentInput;
    medical_record?: medical_recordCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    patient_id: string;
    clinic_id: string;
    healthcare_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    billing?: billingUncheckedCreateNestedManyWithoutAppointmentInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    user_appointment_healthcare_provider_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_healthcare_provider_idTouserNestedInput;
    user_appointment_patient_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_patient_idTouserNestedInput;
    billing?: billingUpdateManyWithoutAppointmentNestedInput;
    medical_record?: medical_recordUpdateManyWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    billing?: billingUncheckedUpdateManyWithoutAppointmentNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutAppointmentNestedInput;
  };

  export type appointmentCreateManyInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    patient_id: string;
    clinic_id: string;
    healthcare_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type billingCreateInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment: appointmentCreateNestedOneWithoutBillingInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutBillingInput;
    user: userCreateNestedOneWithoutBillingInput;
  };

  export type billingUncheckedCreateInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    appointment_id: string;
    patient_id: string;
    insurance_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type billingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateOneRequiredWithoutBillingNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutBillingNestedInput;
    user?: userUpdateOneRequiredWithoutBillingNestedInput;
  };

  export type billingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    appointment_id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type billingCreateManyInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    appointment_id: string;
    patient_id: string;
    insurance_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type billingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type billingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    appointment_id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type clinicCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentCreateNestedManyWithoutClinicInput;
    user: userCreateNestedOneWithoutClinicInput;
  };

  export type clinicUncheckedCreateInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUpdateManyWithoutClinicNestedInput;
    user?: userUpdateOneRequiredWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type clinicCreateManyInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type clinicUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type clinicUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type insurance_providerCreateInput = {
    id?: string;
    name: string;
    contact_number: string;
    address: string;
    email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    billing?: billingCreateNestedManyWithoutInsurance_providerInput;
    user: userCreateNestedOneWithoutInsurance_providerInput;
  };

  export type insurance_providerUncheckedCreateInput = {
    id?: string;
    name: string;
    contact_number: string;
    address: string;
    email: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    billing?: billingUncheckedCreateNestedManyWithoutInsurance_providerInput;
  };

  export type insurance_providerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    billing?: billingUpdateManyWithoutInsurance_providerNestedInput;
    user?: userUpdateOneRequiredWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    billing?: billingUncheckedUpdateManyWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerCreateManyInput = {
    id?: string;
    name: string;
    contact_number: string;
    address: string;
    email: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type insurance_providerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type invoiceCreateInput = {
    id?: string;
    payment_method?: string | null;
    invoice_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutInvoiceInput;
  };

  export type invoiceUncheckedCreateInput = {
    id?: string;
    payment_method?: string | null;
    invoice_status?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type invoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    invoice_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutInvoiceNestedInput;
  };

  export type invoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    invoice_status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type invoiceCreateManyInput = {
    id?: string;
    payment_method?: string | null;
    invoice_status?: string | null;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type invoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    invoice_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type invoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    invoice_status?: NullableStringFieldUpdateOperationsInput | string | null;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordCreateInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment: appointmentCreateNestedOneWithoutMedical_recordInput;
    user: userCreateNestedOneWithoutMedical_recordInput;
  };

  export type medical_recordUncheckedCreateInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    notes?: string | null;
    appointment_id: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateOneRequiredWithoutMedical_recordNestedInput;
    user?: userUpdateOneRequiredWithoutMedical_recordNestedInput;
  };

  export type medical_recordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordCreateManyInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    notes?: string | null;
    appointment_id: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingCreateNestedManyWithoutUserInput;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingUncheckedCreateNestedManyWithoutUserInput;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUpdateManyWithoutUserNestedInput;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUncheckedUpdateManyWithoutUserNestedInput;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateManyInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type userUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type ClinicRelationFilter = {
    is?: clinicWhereInput;
    isNot?: clinicWhereInput;
  };

  export type UserRelationFilter = {
    is?: userWhereInput;
    isNot?: userWhereInput;
  };

  export type BillingListRelationFilter = {
    every?: billingWhereInput;
    some?: billingWhereInput;
    none?: billingWhereInput;
  };

  export type Medical_recordListRelationFilter = {
    every?: medical_recordWhereInput;
    some?: medical_recordWhereInput;
    none?: medical_recordWhereInput;
  };

  export type billingOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type medical_recordOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type appointmentCountOrderByAggregateInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    appointment_time?: SortOrder;
    status?: SortOrder;
    patient_id?: SortOrder;
    clinic_id?: SortOrder;
    healthcare_provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMaxOrderByAggregateInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    appointment_time?: SortOrder;
    status?: SortOrder;
    patient_id?: SortOrder;
    clinic_id?: SortOrder;
    healthcare_provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type appointmentMinOrderByAggregateInput = {
    id?: SortOrder;
    appointment_date?: SortOrder;
    appointment_time?: SortOrder;
    status?: SortOrder;
    patient_id?: SortOrder;
    clinic_id?: SortOrder;
    healthcare_provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type AppointmentRelationFilter = {
    is?: appointmentWhereInput;
    isNot?: appointmentWhereInput;
  };

  export type Insurance_providerRelationFilter = {
    is?: insurance_providerWhereInput;
    isNot?: insurance_providerWhereInput;
  };

  export type billingCountOrderByAggregateInput = {
    id?: SortOrder;
    billing_date?: SortOrder;
    total_amount?: SortOrder;
    status?: SortOrder;
    appointment_id?: SortOrder;
    patient_id?: SortOrder;
    insurance_provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type billingAvgOrderByAggregateInput = {
    total_amount?: SortOrder;
  };

  export type billingMaxOrderByAggregateInput = {
    id?: SortOrder;
    billing_date?: SortOrder;
    total_amount?: SortOrder;
    status?: SortOrder;
    appointment_id?: SortOrder;
    patient_id?: SortOrder;
    insurance_provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type billingMinOrderByAggregateInput = {
    id?: SortOrder;
    billing_date?: SortOrder;
    total_amount?: SortOrder;
    status?: SortOrder;
    appointment_id?: SortOrder;
    patient_id?: SortOrder;
    insurance_provider_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type billingSumOrderByAggregateInput = {
    total_amount?: SortOrder;
  };

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type AppointmentListRelationFilter = {
    every?: appointmentWhereInput;
    some?: appointmentWhereInput;
    none?: appointmentWhereInput;
  };

  export type SortOrderInput = {
    sort: SortOrder;
    nulls?: NullsOrder;
  };

  export type appointmentOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type clinicCountOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clinicMaxOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type clinicMinOrderByAggregateInput = {
    id?: SortOrder;
    description?: SortOrder;
    location?: SortOrder;
    opening_hours?: SortOrder;
    closing_hours?: SortOrder;
    name?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
    user_id?: SortOrder;
    tenant_id?: SortOrder;
  };

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    mode?: QueryMode;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type insurance_providerCountOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    email?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type insurance_providerMaxOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    email?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type insurance_providerMinOrderByAggregateInput = {
    id?: SortOrder;
    name?: SortOrder;
    contact_number?: SortOrder;
    address?: SortOrder;
    email?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type invoiceCountOrderByAggregateInput = {
    id?: SortOrder;
    payment_method?: SortOrder;
    invoice_status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type invoiceMaxOrderByAggregateInput = {
    id?: SortOrder;
    payment_method?: SortOrder;
    invoice_status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type invoiceMinOrderByAggregateInput = {
    id?: SortOrder;
    payment_method?: SortOrder;
    invoice_status?: SortOrder;
    user_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_recordCountOrderByAggregateInput = {
    id?: SortOrder;
    diagnosis?: SortOrder;
    prescription?: SortOrder;
    notes?: SortOrder;
    appointment_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_recordMaxOrderByAggregateInput = {
    id?: SortOrder;
    diagnosis?: SortOrder;
    prescription?: SortOrder;
    notes?: SortOrder;
    appointment_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type medical_recordMinOrderByAggregateInput = {
    id?: SortOrder;
    diagnosis?: SortOrder;
    prescription?: SortOrder;
    notes?: SortOrder;
    appointment_id?: SortOrder;
    patient_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type ClinicListRelationFilter = {
    every?: clinicWhereInput;
    some?: clinicWhereInput;
    none?: clinicWhereInput;
  };

  export type Insurance_providerListRelationFilter = {
    every?: insurance_providerWhereInput;
    some?: insurance_providerWhereInput;
    none?: insurance_providerWhereInput;
  };

  export type InvoiceListRelationFilter = {
    every?: invoiceWhereInput;
    some?: invoiceWhereInput;
    none?: invoiceWhereInput;
  };

  export type clinicOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type insurance_providerOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type invoiceOrderByRelationAggregateInput = {
    _count?: SortOrder;
  };

  export type userCountOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMaxOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type userMinOrderByAggregateInput = {
    id?: SortOrder;
    email?: SortOrder;
    firstName?: SortOrder;
    lastName?: SortOrder;
    roq_user_id?: SortOrder;
    tenant_id?: SortOrder;
    created_at?: SortOrder;
    updated_at?: SortOrder;
  };

  export type clinicCreateNestedOneWithoutAppointmentInput = {
    create?: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutAppointmentInput;
    connect?: clinicWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAppointment_appointment_healthcare_provider_idTouserInput = {
    create?: XOR<
      userCreateWithoutAppointment_appointment_healthcare_provider_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_healthcare_provider_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutAppointment_appointment_healthcare_provider_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutAppointment_appointment_patient_idTouserInput = {
    create?: XOR<
      userCreateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_patient_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutAppointment_appointment_patient_idTouserInput;
    connect?: userWhereUniqueInput;
  };

  export type billingCreateNestedManyWithoutAppointmentInput = {
    create?:
      | XOR<billingCreateWithoutAppointmentInput, billingUncheckedCreateWithoutAppointmentInput>
      | billingCreateWithoutAppointmentInput[]
      | billingUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: billingCreateOrConnectWithoutAppointmentInput | billingCreateOrConnectWithoutAppointmentInput[];
    createMany?: billingCreateManyAppointmentInputEnvelope;
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
  };

  export type medical_recordCreateNestedManyWithoutAppointmentInput = {
    create?:
      | XOR<medical_recordCreateWithoutAppointmentInput, medical_recordUncheckedCreateWithoutAppointmentInput>
      | medical_recordCreateWithoutAppointmentInput[]
      | medical_recordUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutAppointmentInput
      | medical_recordCreateOrConnectWithoutAppointmentInput[];
    createMany?: medical_recordCreateManyAppointmentInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type billingUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?:
      | XOR<billingCreateWithoutAppointmentInput, billingUncheckedCreateWithoutAppointmentInput>
      | billingCreateWithoutAppointmentInput[]
      | billingUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: billingCreateOrConnectWithoutAppointmentInput | billingCreateOrConnectWithoutAppointmentInput[];
    createMany?: billingCreateManyAppointmentInputEnvelope;
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
  };

  export type medical_recordUncheckedCreateNestedManyWithoutAppointmentInput = {
    create?:
      | XOR<medical_recordCreateWithoutAppointmentInput, medical_recordUncheckedCreateWithoutAppointmentInput>
      | medical_recordCreateWithoutAppointmentInput[]
      | medical_recordUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutAppointmentInput
      | medical_recordCreateOrConnectWithoutAppointmentInput[];
    createMany?: medical_recordCreateManyAppointmentInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type StringFieldUpdateOperationsInput = {
    set?: string;
  };

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
  };

  export type clinicUpdateOneRequiredWithoutAppointmentNestedInput = {
    create?: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
    connectOrCreate?: clinicCreateOrConnectWithoutAppointmentInput;
    upsert?: clinicUpsertWithoutAppointmentInput;
    connect?: clinicWhereUniqueInput;
    update?: XOR<
      XOR<clinicUpdateToOneWithWhereWithoutAppointmentInput, clinicUpdateWithoutAppointmentInput>,
      clinicUncheckedUpdateWithoutAppointmentInput
    >;
  };

  export type userUpdateOneRequiredWithoutAppointment_appointment_healthcare_provider_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutAppointment_appointment_healthcare_provider_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_healthcare_provider_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutAppointment_appointment_healthcare_provider_idTouserInput;
    upsert?: userUpsertWithoutAppointment_appointment_healthcare_provider_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutAppointment_appointment_healthcare_provider_idTouserInput,
        userUpdateWithoutAppointment_appointment_healthcare_provider_idTouserInput
      >,
      userUncheckedUpdateWithoutAppointment_appointment_healthcare_provider_idTouserInput
    >;
  };

  export type userUpdateOneRequiredWithoutAppointment_appointment_patient_idTouserNestedInput = {
    create?: XOR<
      userCreateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_patient_idTouserInput
    >;
    connectOrCreate?: userCreateOrConnectWithoutAppointment_appointment_patient_idTouserInput;
    upsert?: userUpsertWithoutAppointment_appointment_patient_idTouserInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<
        userUpdateToOneWithWhereWithoutAppointment_appointment_patient_idTouserInput,
        userUpdateWithoutAppointment_appointment_patient_idTouserInput
      >,
      userUncheckedUpdateWithoutAppointment_appointment_patient_idTouserInput
    >;
  };

  export type billingUpdateManyWithoutAppointmentNestedInput = {
    create?:
      | XOR<billingCreateWithoutAppointmentInput, billingUncheckedCreateWithoutAppointmentInput>
      | billingCreateWithoutAppointmentInput[]
      | billingUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: billingCreateOrConnectWithoutAppointmentInput | billingCreateOrConnectWithoutAppointmentInput[];
    upsert?:
      | billingUpsertWithWhereUniqueWithoutAppointmentInput
      | billingUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: billingCreateManyAppointmentInputEnvelope;
    set?: billingWhereUniqueInput | billingWhereUniqueInput[];
    disconnect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    delete?: billingWhereUniqueInput | billingWhereUniqueInput[];
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    update?:
      | billingUpdateWithWhereUniqueWithoutAppointmentInput
      | billingUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?:
      | billingUpdateManyWithWhereWithoutAppointmentInput
      | billingUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: billingScalarWhereInput | billingScalarWhereInput[];
  };

  export type medical_recordUpdateManyWithoutAppointmentNestedInput = {
    create?:
      | XOR<medical_recordCreateWithoutAppointmentInput, medical_recordUncheckedCreateWithoutAppointmentInput>
      | medical_recordCreateWithoutAppointmentInput[]
      | medical_recordUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutAppointmentInput
      | medical_recordCreateOrConnectWithoutAppointmentInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutAppointmentInput
      | medical_recordUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: medical_recordCreateManyAppointmentInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutAppointmentInput
      | medical_recordUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutAppointmentInput
      | medical_recordUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type billingUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?:
      | XOR<billingCreateWithoutAppointmentInput, billingUncheckedCreateWithoutAppointmentInput>
      | billingCreateWithoutAppointmentInput[]
      | billingUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?: billingCreateOrConnectWithoutAppointmentInput | billingCreateOrConnectWithoutAppointmentInput[];
    upsert?:
      | billingUpsertWithWhereUniqueWithoutAppointmentInput
      | billingUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: billingCreateManyAppointmentInputEnvelope;
    set?: billingWhereUniqueInput | billingWhereUniqueInput[];
    disconnect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    delete?: billingWhereUniqueInput | billingWhereUniqueInput[];
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    update?:
      | billingUpdateWithWhereUniqueWithoutAppointmentInput
      | billingUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?:
      | billingUpdateManyWithWhereWithoutAppointmentInput
      | billingUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: billingScalarWhereInput | billingScalarWhereInput[];
  };

  export type medical_recordUncheckedUpdateManyWithoutAppointmentNestedInput = {
    create?:
      | XOR<medical_recordCreateWithoutAppointmentInput, medical_recordUncheckedCreateWithoutAppointmentInput>
      | medical_recordCreateWithoutAppointmentInput[]
      | medical_recordUncheckedCreateWithoutAppointmentInput[];
    connectOrCreate?:
      | medical_recordCreateOrConnectWithoutAppointmentInput
      | medical_recordCreateOrConnectWithoutAppointmentInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutAppointmentInput
      | medical_recordUpsertWithWhereUniqueWithoutAppointmentInput[];
    createMany?: medical_recordCreateManyAppointmentInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutAppointmentInput
      | medical_recordUpdateWithWhereUniqueWithoutAppointmentInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutAppointmentInput
      | medical_recordUpdateManyWithWhereWithoutAppointmentInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type appointmentCreateNestedOneWithoutBillingInput = {
    create?: XOR<appointmentCreateWithoutBillingInput, appointmentUncheckedCreateWithoutBillingInput>;
    connectOrCreate?: appointmentCreateOrConnectWithoutBillingInput;
    connect?: appointmentWhereUniqueInput;
  };

  export type insurance_providerCreateNestedOneWithoutBillingInput = {
    create?: XOR<insurance_providerCreateWithoutBillingInput, insurance_providerUncheckedCreateWithoutBillingInput>;
    connectOrCreate?: insurance_providerCreateOrConnectWithoutBillingInput;
    connect?: insurance_providerWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutBillingInput = {
    create?: XOR<userCreateWithoutBillingInput, userUncheckedCreateWithoutBillingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBillingInput;
    connect?: userWhereUniqueInput;
  };

  export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
  };

  export type appointmentUpdateOneRequiredWithoutBillingNestedInput = {
    create?: XOR<appointmentCreateWithoutBillingInput, appointmentUncheckedCreateWithoutBillingInput>;
    connectOrCreate?: appointmentCreateOrConnectWithoutBillingInput;
    upsert?: appointmentUpsertWithoutBillingInput;
    connect?: appointmentWhereUniqueInput;
    update?: XOR<
      XOR<appointmentUpdateToOneWithWhereWithoutBillingInput, appointmentUpdateWithoutBillingInput>,
      appointmentUncheckedUpdateWithoutBillingInput
    >;
  };

  export type insurance_providerUpdateOneRequiredWithoutBillingNestedInput = {
    create?: XOR<insurance_providerCreateWithoutBillingInput, insurance_providerUncheckedCreateWithoutBillingInput>;
    connectOrCreate?: insurance_providerCreateOrConnectWithoutBillingInput;
    upsert?: insurance_providerUpsertWithoutBillingInput;
    connect?: insurance_providerWhereUniqueInput;
    update?: XOR<
      XOR<insurance_providerUpdateToOneWithWhereWithoutBillingInput, insurance_providerUpdateWithoutBillingInput>,
      insurance_providerUncheckedUpdateWithoutBillingInput
    >;
  };

  export type userUpdateOneRequiredWithoutBillingNestedInput = {
    create?: XOR<userCreateWithoutBillingInput, userUncheckedCreateWithoutBillingInput>;
    connectOrCreate?: userCreateOrConnectWithoutBillingInput;
    upsert?: userUpsertWithoutBillingInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutBillingInput, userUpdateWithoutBillingInput>,
      userUncheckedUpdateWithoutBillingInput
    >;
  };

  export type appointmentCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutClinicInput = {
    create?: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
    connectOrCreate?: userCreateOrConnectWithoutClinicInput;
    connect?: userWhereUniqueInput;
  };

  export type appointmentUncheckedCreateNestedManyWithoutClinicInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
  };

  export type appointmentUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutClinicInput | appointmentUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutClinicInput | appointmentUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutClinicInput | appointmentUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutClinicNestedInput = {
    create?: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
    connectOrCreate?: userCreateOrConnectWithoutClinicInput;
    upsert?: userUpsertWithoutClinicInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutClinicInput, userUpdateWithoutClinicInput>,
      userUncheckedUpdateWithoutClinicInput
    >;
  };

  export type appointmentUncheckedUpdateManyWithoutClinicNestedInput = {
    create?:
      | XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>
      | appointmentCreateWithoutClinicInput[]
      | appointmentUncheckedCreateWithoutClinicInput[];
    connectOrCreate?: appointmentCreateOrConnectWithoutClinicInput | appointmentCreateOrConnectWithoutClinicInput[];
    upsert?: appointmentUpsertWithWhereUniqueWithoutClinicInput | appointmentUpsertWithWhereUniqueWithoutClinicInput[];
    createMany?: appointmentCreateManyClinicInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?: appointmentUpdateWithWhereUniqueWithoutClinicInput | appointmentUpdateWithWhereUniqueWithoutClinicInput[];
    updateMany?: appointmentUpdateManyWithWhereWithoutClinicInput | appointmentUpdateManyWithWhereWithoutClinicInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type billingCreateNestedManyWithoutInsurance_providerInput = {
    create?:
      | XOR<billingCreateWithoutInsurance_providerInput, billingUncheckedCreateWithoutInsurance_providerInput>
      | billingCreateWithoutInsurance_providerInput[]
      | billingUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | billingCreateOrConnectWithoutInsurance_providerInput
      | billingCreateOrConnectWithoutInsurance_providerInput[];
    createMany?: billingCreateManyInsurance_providerInputEnvelope;
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
  };

  export type userCreateNestedOneWithoutInsurance_providerInput = {
    create?: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
    connectOrCreate?: userCreateOrConnectWithoutInsurance_providerInput;
    connect?: userWhereUniqueInput;
  };

  export type billingUncheckedCreateNestedManyWithoutInsurance_providerInput = {
    create?:
      | XOR<billingCreateWithoutInsurance_providerInput, billingUncheckedCreateWithoutInsurance_providerInput>
      | billingCreateWithoutInsurance_providerInput[]
      | billingUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | billingCreateOrConnectWithoutInsurance_providerInput
      | billingCreateOrConnectWithoutInsurance_providerInput[];
    createMany?: billingCreateManyInsurance_providerInputEnvelope;
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
  };

  export type billingUpdateManyWithoutInsurance_providerNestedInput = {
    create?:
      | XOR<billingCreateWithoutInsurance_providerInput, billingUncheckedCreateWithoutInsurance_providerInput>
      | billingCreateWithoutInsurance_providerInput[]
      | billingUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | billingCreateOrConnectWithoutInsurance_providerInput
      | billingCreateOrConnectWithoutInsurance_providerInput[];
    upsert?:
      | billingUpsertWithWhereUniqueWithoutInsurance_providerInput
      | billingUpsertWithWhereUniqueWithoutInsurance_providerInput[];
    createMany?: billingCreateManyInsurance_providerInputEnvelope;
    set?: billingWhereUniqueInput | billingWhereUniqueInput[];
    disconnect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    delete?: billingWhereUniqueInput | billingWhereUniqueInput[];
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    update?:
      | billingUpdateWithWhereUniqueWithoutInsurance_providerInput
      | billingUpdateWithWhereUniqueWithoutInsurance_providerInput[];
    updateMany?:
      | billingUpdateManyWithWhereWithoutInsurance_providerInput
      | billingUpdateManyWithWhereWithoutInsurance_providerInput[];
    deleteMany?: billingScalarWhereInput | billingScalarWhereInput[];
  };

  export type userUpdateOneRequiredWithoutInsurance_providerNestedInput = {
    create?: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
    connectOrCreate?: userCreateOrConnectWithoutInsurance_providerInput;
    upsert?: userUpsertWithoutInsurance_providerInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutInsurance_providerInput, userUpdateWithoutInsurance_providerInput>,
      userUncheckedUpdateWithoutInsurance_providerInput
    >;
  };

  export type billingUncheckedUpdateManyWithoutInsurance_providerNestedInput = {
    create?:
      | XOR<billingCreateWithoutInsurance_providerInput, billingUncheckedCreateWithoutInsurance_providerInput>
      | billingCreateWithoutInsurance_providerInput[]
      | billingUncheckedCreateWithoutInsurance_providerInput[];
    connectOrCreate?:
      | billingCreateOrConnectWithoutInsurance_providerInput
      | billingCreateOrConnectWithoutInsurance_providerInput[];
    upsert?:
      | billingUpsertWithWhereUniqueWithoutInsurance_providerInput
      | billingUpsertWithWhereUniqueWithoutInsurance_providerInput[];
    createMany?: billingCreateManyInsurance_providerInputEnvelope;
    set?: billingWhereUniqueInput | billingWhereUniqueInput[];
    disconnect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    delete?: billingWhereUniqueInput | billingWhereUniqueInput[];
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    update?:
      | billingUpdateWithWhereUniqueWithoutInsurance_providerInput
      | billingUpdateWithWhereUniqueWithoutInsurance_providerInput[];
    updateMany?:
      | billingUpdateManyWithWhereWithoutInsurance_providerInput
      | billingUpdateManyWithWhereWithoutInsurance_providerInput[];
    deleteMany?: billingScalarWhereInput | billingScalarWhereInput[];
  };

  export type userCreateNestedOneWithoutInvoiceInput = {
    create?: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: userCreateOrConnectWithoutInvoiceInput;
    connect?: userWhereUniqueInput;
  };

  export type userUpdateOneRequiredWithoutInvoiceNestedInput = {
    create?: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>;
    connectOrCreate?: userCreateOrConnectWithoutInvoiceInput;
    upsert?: userUpsertWithoutInvoiceInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutInvoiceInput, userUpdateWithoutInvoiceInput>,
      userUncheckedUpdateWithoutInvoiceInput
    >;
  };

  export type appointmentCreateNestedOneWithoutMedical_recordInput = {
    create?: XOR<appointmentCreateWithoutMedical_recordInput, appointmentUncheckedCreateWithoutMedical_recordInput>;
    connectOrCreate?: appointmentCreateOrConnectWithoutMedical_recordInput;
    connect?: appointmentWhereUniqueInput;
  };

  export type userCreateNestedOneWithoutMedical_recordInput = {
    create?: XOR<userCreateWithoutMedical_recordInput, userUncheckedCreateWithoutMedical_recordInput>;
    connectOrCreate?: userCreateOrConnectWithoutMedical_recordInput;
    connect?: userWhereUniqueInput;
  };

  export type appointmentUpdateOneRequiredWithoutMedical_recordNestedInput = {
    create?: XOR<appointmentCreateWithoutMedical_recordInput, appointmentUncheckedCreateWithoutMedical_recordInput>;
    connectOrCreate?: appointmentCreateOrConnectWithoutMedical_recordInput;
    upsert?: appointmentUpsertWithoutMedical_recordInput;
    connect?: appointmentWhereUniqueInput;
    update?: XOR<
      XOR<appointmentUpdateToOneWithWhereWithoutMedical_recordInput, appointmentUpdateWithoutMedical_recordInput>,
      appointmentUncheckedUpdateWithoutMedical_recordInput
    >;
  };

  export type userUpdateOneRequiredWithoutMedical_recordNestedInput = {
    create?: XOR<userCreateWithoutMedical_recordInput, userUncheckedCreateWithoutMedical_recordInput>;
    connectOrCreate?: userCreateOrConnectWithoutMedical_recordInput;
    upsert?: userUpsertWithoutMedical_recordInput;
    connect?: userWhereUniqueInput;
    update?: XOR<
      XOR<userUpdateToOneWithWhereWithoutMedical_recordInput, userUpdateWithoutMedical_recordInput>,
      userUncheckedUpdateWithoutMedical_recordInput
    >;
  };

  export type appointmentCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_healthcare_provider_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_healthcare_provider_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_healthcare_provider_idTouserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_patient_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_patient_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_patient_idTouserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type billingCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<billingCreateWithoutUserInput, billingUncheckedCreateWithoutUserInput>
      | billingCreateWithoutUserInput[]
      | billingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: billingCreateOrConnectWithoutUserInput | billingCreateOrConnectWithoutUserInput[];
    createMany?: billingCreateManyUserInputEnvelope;
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
  };

  export type clinicCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
  };

  export type insurance_providerCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
  };

  export type invoiceCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
      | invoiceCreateWithoutUserInput[]
      | invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[];
    createMany?: invoiceCreateManyUserInputEnvelope;
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
  };

  export type medical_recordCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>
      | medical_recordCreateWithoutUserInput[]
      | medical_recordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_recordCreateOrConnectWithoutUserInput | medical_recordCreateOrConnectWithoutUserInput[];
    createMany?: medical_recordCreateManyUserInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_healthcare_provider_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_healthcare_provider_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_healthcare_provider_idTouserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_patient_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_patient_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_patient_idTouserInputEnvelope;
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
  };

  export type billingUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<billingCreateWithoutUserInput, billingUncheckedCreateWithoutUserInput>
      | billingCreateWithoutUserInput[]
      | billingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: billingCreateOrConnectWithoutUserInput | billingCreateOrConnectWithoutUserInput[];
    createMany?: billingCreateManyUserInputEnvelope;
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
  };

  export type clinicUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
  };

  export type insurance_providerUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
  };

  export type invoiceUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
      | invoiceCreateWithoutUserInput[]
      | invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[];
    createMany?: invoiceCreateManyUserInputEnvelope;
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
  };

  export type medical_recordUncheckedCreateNestedManyWithoutUserInput = {
    create?:
      | XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>
      | medical_recordCreateWithoutUserInput[]
      | medical_recordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_recordCreateOrConnectWithoutUserInput | medical_recordCreateOrConnectWithoutUserInput[];
    createMany?: medical_recordCreateManyUserInputEnvelope;
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
  };

  export type appointmentUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_healthcare_provider_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_healthcare_provider_idTouserInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_healthcare_provider_idTouserInput
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_healthcare_provider_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_healthcare_provider_idTouserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_healthcare_provider_idTouserInput
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_healthcare_provider_idTouserInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutUser_appointment_healthcare_provider_idTouserInput
      | appointmentUpdateManyWithWhereWithoutUser_appointment_healthcare_provider_idTouserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_patient_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_patient_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_patient_idTouserInput
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_patient_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_patient_idTouserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_patient_idTouserInput
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_patient_idTouserInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutUser_appointment_patient_idTouserInput
      | appointmentUpdateManyWithWhereWithoutUser_appointment_patient_idTouserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type billingUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<billingCreateWithoutUserInput, billingUncheckedCreateWithoutUserInput>
      | billingCreateWithoutUserInput[]
      | billingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: billingCreateOrConnectWithoutUserInput | billingCreateOrConnectWithoutUserInput[];
    upsert?: billingUpsertWithWhereUniqueWithoutUserInput | billingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: billingCreateManyUserInputEnvelope;
    set?: billingWhereUniqueInput | billingWhereUniqueInput[];
    disconnect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    delete?: billingWhereUniqueInput | billingWhereUniqueInput[];
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    update?: billingUpdateWithWhereUniqueWithoutUserInput | billingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: billingUpdateManyWithWhereWithoutUserInput | billingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: billingScalarWhereInput | billingScalarWhereInput[];
  };

  export type clinicUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    upsert?: clinicUpsertWithWhereUniqueWithoutUserInput | clinicUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    set?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    disconnect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    delete?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    update?: clinicUpdateWithWhereUniqueWithoutUserInput | clinicUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: clinicUpdateManyWithWhereWithoutUserInput | clinicUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: clinicScalarWhereInput | clinicScalarWhereInput[];
  };

  export type insurance_providerUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    upsert?:
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    set?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    disconnect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    delete?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    update?:
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | insurance_providerUpdateManyWithWhereWithoutUserInput
      | insurance_providerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
  };

  export type invoiceUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
      | invoiceCreateWithoutUserInput[]
      | invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[];
    upsert?: invoiceUpsertWithWhereUniqueWithoutUserInput | invoiceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: invoiceCreateManyUserInputEnvelope;
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    update?: invoiceUpdateWithWhereUniqueWithoutUserInput | invoiceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: invoiceUpdateManyWithWhereWithoutUserInput | invoiceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[];
  };

  export type medical_recordUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>
      | medical_recordCreateWithoutUserInput[]
      | medical_recordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_recordCreateOrConnectWithoutUserInput | medical_recordCreateOrConnectWithoutUserInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutUserInput
      | medical_recordUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: medical_recordCreateManyUserInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutUserInput
      | medical_recordUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutUserInput
      | medical_recordUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_healthcare_provider_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_healthcare_provider_idTouserInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_healthcare_provider_idTouserInput
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_healthcare_provider_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_healthcare_provider_idTouserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_healthcare_provider_idTouserInput
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_healthcare_provider_idTouserInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutUser_appointment_healthcare_provider_idTouserInput
      | appointmentUpdateManyWithWhereWithoutUser_appointment_healthcare_provider_idTouserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput = {
    create?:
      | XOR<
          appointmentCreateWithoutUser_appointment_patient_idTouserInput,
          appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
        >
      | appointmentCreateWithoutUser_appointment_patient_idTouserInput[]
      | appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput[];
    connectOrCreate?:
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput
      | appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput[];
    upsert?:
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_patient_idTouserInput
      | appointmentUpsertWithWhereUniqueWithoutUser_appointment_patient_idTouserInput[];
    createMany?: appointmentCreateManyUser_appointment_patient_idTouserInputEnvelope;
    set?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    disconnect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    delete?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    connect?: appointmentWhereUniqueInput | appointmentWhereUniqueInput[];
    update?:
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_patient_idTouserInput
      | appointmentUpdateWithWhereUniqueWithoutUser_appointment_patient_idTouserInput[];
    updateMany?:
      | appointmentUpdateManyWithWhereWithoutUser_appointment_patient_idTouserInput
      | appointmentUpdateManyWithWhereWithoutUser_appointment_patient_idTouserInput[];
    deleteMany?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
  };

  export type billingUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<billingCreateWithoutUserInput, billingUncheckedCreateWithoutUserInput>
      | billingCreateWithoutUserInput[]
      | billingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: billingCreateOrConnectWithoutUserInput | billingCreateOrConnectWithoutUserInput[];
    upsert?: billingUpsertWithWhereUniqueWithoutUserInput | billingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: billingCreateManyUserInputEnvelope;
    set?: billingWhereUniqueInput | billingWhereUniqueInput[];
    disconnect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    delete?: billingWhereUniqueInput | billingWhereUniqueInput[];
    connect?: billingWhereUniqueInput | billingWhereUniqueInput[];
    update?: billingUpdateWithWhereUniqueWithoutUserInput | billingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: billingUpdateManyWithWhereWithoutUserInput | billingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: billingScalarWhereInput | billingScalarWhereInput[];
  };

  export type clinicUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>
      | clinicCreateWithoutUserInput[]
      | clinicUncheckedCreateWithoutUserInput[];
    connectOrCreate?: clinicCreateOrConnectWithoutUserInput | clinicCreateOrConnectWithoutUserInput[];
    upsert?: clinicUpsertWithWhereUniqueWithoutUserInput | clinicUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: clinicCreateManyUserInputEnvelope;
    set?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    disconnect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    delete?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    connect?: clinicWhereUniqueInput | clinicWhereUniqueInput[];
    update?: clinicUpdateWithWhereUniqueWithoutUserInput | clinicUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: clinicUpdateManyWithWhereWithoutUserInput | clinicUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: clinicScalarWhereInput | clinicScalarWhereInput[];
  };

  export type insurance_providerUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>
      | insurance_providerCreateWithoutUserInput[]
      | insurance_providerUncheckedCreateWithoutUserInput[];
    connectOrCreate?:
      | insurance_providerCreateOrConnectWithoutUserInput
      | insurance_providerCreateOrConnectWithoutUserInput[];
    upsert?:
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput
      | insurance_providerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: insurance_providerCreateManyUserInputEnvelope;
    set?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    disconnect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    delete?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    connect?: insurance_providerWhereUniqueInput | insurance_providerWhereUniqueInput[];
    update?:
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput
      | insurance_providerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | insurance_providerUpdateManyWithWhereWithoutUserInput
      | insurance_providerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
  };

  export type invoiceUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>
      | invoiceCreateWithoutUserInput[]
      | invoiceUncheckedCreateWithoutUserInput[];
    connectOrCreate?: invoiceCreateOrConnectWithoutUserInput | invoiceCreateOrConnectWithoutUserInput[];
    upsert?: invoiceUpsertWithWhereUniqueWithoutUserInput | invoiceUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: invoiceCreateManyUserInputEnvelope;
    set?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    disconnect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    delete?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    connect?: invoiceWhereUniqueInput | invoiceWhereUniqueInput[];
    update?: invoiceUpdateWithWhereUniqueWithoutUserInput | invoiceUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: invoiceUpdateManyWithWhereWithoutUserInput | invoiceUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: invoiceScalarWhereInput | invoiceScalarWhereInput[];
  };

  export type medical_recordUncheckedUpdateManyWithoutUserNestedInput = {
    create?:
      | XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>
      | medical_recordCreateWithoutUserInput[]
      | medical_recordUncheckedCreateWithoutUserInput[];
    connectOrCreate?: medical_recordCreateOrConnectWithoutUserInput | medical_recordCreateOrConnectWithoutUserInput[];
    upsert?:
      | medical_recordUpsertWithWhereUniqueWithoutUserInput
      | medical_recordUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: medical_recordCreateManyUserInputEnvelope;
    set?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    disconnect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    delete?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    connect?: medical_recordWhereUniqueInput | medical_recordWhereUniqueInput[];
    update?:
      | medical_recordUpdateWithWhereUniqueWithoutUserInput
      | medical_recordUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?:
      | medical_recordUpdateManyWithWhereWithoutUserInput
      | medical_recordUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
  };

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidFilter<$PrismaModel> | string;
  };

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string;
  };

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringFilter<$PrismaModel> | string;
  };

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntFilter<$PrismaModel> | number;
  };

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>;
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedDateTimeFilter<$PrismaModel>;
    _max?: NestedDateTimeFilter<$PrismaModel>;
  };

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>;
    in?: string[] | ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: NestedIntFilter<$PrismaModel>;
    _min?: NestedStringFilter<$PrismaModel>;
    _max?: NestedStringFilter<$PrismaModel>;
  };

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>;
    in?: number[] | ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: NestedIntFilter<$PrismaModel>;
    _avg?: NestedFloatFilter<$PrismaModel>;
    _sum?: NestedIntFilter<$PrismaModel>;
    _min?: NestedIntFilter<$PrismaModel>;
    _max?: NestedIntFilter<$PrismaModel>;
  };

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>;
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | FloatFieldRefInput<$PrismaModel>;
    lte?: number | FloatFieldRefInput<$PrismaModel>;
    gt?: number | FloatFieldRefInput<$PrismaModel>;
    gte?: number | FloatFieldRefInput<$PrismaModel>;
    not?: NestedFloatFilter<$PrismaModel> | number;
  };

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableFilter<$PrismaModel> | string | null;
  };

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | StringFieldRefInput<$PrismaModel>;
    lte?: string | StringFieldRefInput<$PrismaModel>;
    gt?: string | StringFieldRefInput<$PrismaModel>;
    gte?: string | StringFieldRefInput<$PrismaModel>;
    contains?: string | StringFieldRefInput<$PrismaModel>;
    startsWith?: string | StringFieldRefInput<$PrismaModel>;
    endsWith?: string | StringFieldRefInput<$PrismaModel>;
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: NestedIntNullableFilter<$PrismaModel>;
    _min?: NestedStringNullableFilter<$PrismaModel>;
    _max?: NestedStringNullableFilter<$PrismaModel>;
  };

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | IntFieldRefInput<$PrismaModel>;
    lte?: number | IntFieldRefInput<$PrismaModel>;
    gt?: number | IntFieldRefInput<$PrismaModel>;
    gte?: number | IntFieldRefInput<$PrismaModel>;
    not?: NestedIntNullableFilter<$PrismaModel> | number | null;
  };

  export type clinicCreateWithoutAppointmentInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    user: userCreateNestedOneWithoutClinicInput;
  };

  export type clinicUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_id: string;
    tenant_id: string;
  };

  export type clinicCreateOrConnectWithoutAppointmentInput = {
    where: clinicWhereUniqueInput;
    create: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
  };

  export type userCreateWithoutAppointment_appointment_healthcare_provider_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingCreateNestedManyWithoutUserInput;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAppointment_appointment_healthcare_provider_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingUncheckedCreateNestedManyWithoutUserInput;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAppointment_appointment_healthcare_provider_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutAppointment_appointment_healthcare_provider_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_healthcare_provider_idTouserInput
    >;
  };

  export type userCreateWithoutAppointment_appointment_patient_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    billing?: billingCreateNestedManyWithoutUserInput;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutAppointment_appointment_patient_idTouserInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    billing?: billingUncheckedCreateNestedManyWithoutUserInput;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutAppointment_appointment_patient_idTouserInput = {
    where: userWhereUniqueInput;
    create: XOR<
      userCreateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_patient_idTouserInput
    >;
  };

  export type billingCreateWithoutAppointmentInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    insurance_provider: insurance_providerCreateNestedOneWithoutBillingInput;
    user: userCreateNestedOneWithoutBillingInput;
  };

  export type billingUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    patient_id: string;
    insurance_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type billingCreateOrConnectWithoutAppointmentInput = {
    where: billingWhereUniqueInput;
    create: XOR<billingCreateWithoutAppointmentInput, billingUncheckedCreateWithoutAppointmentInput>;
  };

  export type billingCreateManyAppointmentInputEnvelope = {
    data: billingCreateManyAppointmentInput | billingCreateManyAppointmentInput[];
    skipDuplicates?: boolean;
  };

  export type medical_recordCreateWithoutAppointmentInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutMedical_recordInput;
  };

  export type medical_recordUncheckedCreateWithoutAppointmentInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    notes?: string | null;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateOrConnectWithoutAppointmentInput = {
    where: medical_recordWhereUniqueInput;
    create: XOR<medical_recordCreateWithoutAppointmentInput, medical_recordUncheckedCreateWithoutAppointmentInput>;
  };

  export type medical_recordCreateManyAppointmentInputEnvelope = {
    data: medical_recordCreateManyAppointmentInput | medical_recordCreateManyAppointmentInput[];
    skipDuplicates?: boolean;
  };

  export type clinicUpsertWithoutAppointmentInput = {
    update: XOR<clinicUpdateWithoutAppointmentInput, clinicUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<clinicCreateWithoutAppointmentInput, clinicUncheckedCreateWithoutAppointmentInput>;
    where?: clinicWhereInput;
  };

  export type clinicUpdateToOneWithWhereWithoutAppointmentInput = {
    where?: clinicWhereInput;
    data: XOR<clinicUpdateWithoutAppointmentInput, clinicUncheckedUpdateWithoutAppointmentInput>;
  };

  export type clinicUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    user?: userUpdateOneRequiredWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type userUpsertWithoutAppointment_appointment_healthcare_provider_idTouserInput = {
    update: XOR<
      userUpdateWithoutAppointment_appointment_healthcare_provider_idTouserInput,
      userUncheckedUpdateWithoutAppointment_appointment_healthcare_provider_idTouserInput
    >;
    create: XOR<
      userCreateWithoutAppointment_appointment_healthcare_provider_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_healthcare_provider_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAppointment_appointment_healthcare_provider_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutAppointment_appointment_healthcare_provider_idTouserInput,
      userUncheckedUpdateWithoutAppointment_appointment_healthcare_provider_idTouserInput
    >;
  };

  export type userUpdateWithoutAppointment_appointment_healthcare_provider_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUpdateManyWithoutUserNestedInput;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAppointment_appointment_healthcare_provider_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUncheckedUpdateManyWithoutUserNestedInput;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userUpsertWithoutAppointment_appointment_patient_idTouserInput = {
    update: XOR<
      userUpdateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedUpdateWithoutAppointment_appointment_patient_idTouserInput
    >;
    create: XOR<
      userCreateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedCreateWithoutAppointment_appointment_patient_idTouserInput
    >;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutAppointment_appointment_patient_idTouserInput = {
    where?: userWhereInput;
    data: XOR<
      userUpdateWithoutAppointment_appointment_patient_idTouserInput,
      userUncheckedUpdateWithoutAppointment_appointment_patient_idTouserInput
    >;
  };

  export type userUpdateWithoutAppointment_appointment_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    billing?: billingUpdateManyWithoutUserNestedInput;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutAppointment_appointment_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    billing?: billingUncheckedUpdateManyWithoutUserNestedInput;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type billingUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: billingWhereUniqueInput;
    update: XOR<billingUpdateWithoutAppointmentInput, billingUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<billingCreateWithoutAppointmentInput, billingUncheckedCreateWithoutAppointmentInput>;
  };

  export type billingUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: billingWhereUniqueInput;
    data: XOR<billingUpdateWithoutAppointmentInput, billingUncheckedUpdateWithoutAppointmentInput>;
  };

  export type billingUpdateManyWithWhereWithoutAppointmentInput = {
    where: billingScalarWhereInput;
    data: XOR<billingUpdateManyMutationInput, billingUncheckedUpdateManyWithoutAppointmentInput>;
  };

  export type billingScalarWhereInput = {
    AND?: billingScalarWhereInput | billingScalarWhereInput[];
    OR?: billingScalarWhereInput[];
    NOT?: billingScalarWhereInput | billingScalarWhereInput[];
    id?: UuidFilter<'billing'> | string;
    billing_date?: DateTimeFilter<'billing'> | Date | string;
    total_amount?: IntFilter<'billing'> | number;
    status?: StringFilter<'billing'> | string;
    appointment_id?: UuidFilter<'billing'> | string;
    patient_id?: UuidFilter<'billing'> | string;
    insurance_provider_id?: UuidFilter<'billing'> | string;
    created_at?: DateTimeFilter<'billing'> | Date | string;
    updated_at?: DateTimeFilter<'billing'> | Date | string;
  };

  export type medical_recordUpsertWithWhereUniqueWithoutAppointmentInput = {
    where: medical_recordWhereUniqueInput;
    update: XOR<medical_recordUpdateWithoutAppointmentInput, medical_recordUncheckedUpdateWithoutAppointmentInput>;
    create: XOR<medical_recordCreateWithoutAppointmentInput, medical_recordUncheckedCreateWithoutAppointmentInput>;
  };

  export type medical_recordUpdateWithWhereUniqueWithoutAppointmentInput = {
    where: medical_recordWhereUniqueInput;
    data: XOR<medical_recordUpdateWithoutAppointmentInput, medical_recordUncheckedUpdateWithoutAppointmentInput>;
  };

  export type medical_recordUpdateManyWithWhereWithoutAppointmentInput = {
    where: medical_recordScalarWhereInput;
    data: XOR<medical_recordUpdateManyMutationInput, medical_recordUncheckedUpdateManyWithoutAppointmentInput>;
  };

  export type medical_recordScalarWhereInput = {
    AND?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
    OR?: medical_recordScalarWhereInput[];
    NOT?: medical_recordScalarWhereInput | medical_recordScalarWhereInput[];
    id?: UuidFilter<'medical_record'> | string;
    diagnosis?: StringFilter<'medical_record'> | string;
    prescription?: StringFilter<'medical_record'> | string;
    notes?: StringNullableFilter<'medical_record'> | string | null;
    appointment_id?: UuidFilter<'medical_record'> | string;
    patient_id?: UuidFilter<'medical_record'> | string;
    created_at?: DateTimeFilter<'medical_record'> | Date | string;
    updated_at?: DateTimeFilter<'medical_record'> | Date | string;
  };

  export type appointmentCreateWithoutBillingInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    user_appointment_healthcare_provider_idTouser: userCreateNestedOneWithoutAppointment_appointment_healthcare_provider_idTouserInput;
    user_appointment_patient_idTouser: userCreateNestedOneWithoutAppointment_appointment_patient_idTouserInput;
    medical_record?: medical_recordCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutBillingInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    patient_id: string;
    clinic_id: string;
    healthcare_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentCreateOrConnectWithoutBillingInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutBillingInput, appointmentUncheckedCreateWithoutBillingInput>;
  };

  export type insurance_providerCreateWithoutBillingInput = {
    id?: string;
    name: string;
    contact_number: string;
    address: string;
    email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: userCreateNestedOneWithoutInsurance_providerInput;
  };

  export type insurance_providerUncheckedCreateWithoutBillingInput = {
    id?: string;
    name: string;
    contact_number: string;
    address: string;
    email: string;
    user_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type insurance_providerCreateOrConnectWithoutBillingInput = {
    where: insurance_providerWhereUniqueInput;
    create: XOR<insurance_providerCreateWithoutBillingInput, insurance_providerUncheckedCreateWithoutBillingInput>;
  };

  export type userCreateWithoutBillingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutBillingInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutBillingInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutBillingInput, userUncheckedCreateWithoutBillingInput>;
  };

  export type appointmentUpsertWithoutBillingInput = {
    update: XOR<appointmentUpdateWithoutBillingInput, appointmentUncheckedUpdateWithoutBillingInput>;
    create: XOR<appointmentCreateWithoutBillingInput, appointmentUncheckedCreateWithoutBillingInput>;
    where?: appointmentWhereInput;
  };

  export type appointmentUpdateToOneWithWhereWithoutBillingInput = {
    where?: appointmentWhereInput;
    data: XOR<appointmentUpdateWithoutBillingInput, appointmentUncheckedUpdateWithoutBillingInput>;
  };

  export type appointmentUpdateWithoutBillingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    user_appointment_healthcare_provider_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_healthcare_provider_idTouserNestedInput;
    user_appointment_patient_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_patient_idTouserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutBillingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    medical_record?: medical_recordUncheckedUpdateManyWithoutAppointmentNestedInput;
  };

  export type insurance_providerUpsertWithoutBillingInput = {
    update: XOR<insurance_providerUpdateWithoutBillingInput, insurance_providerUncheckedUpdateWithoutBillingInput>;
    create: XOR<insurance_providerCreateWithoutBillingInput, insurance_providerUncheckedCreateWithoutBillingInput>;
    where?: insurance_providerWhereInput;
  };

  export type insurance_providerUpdateToOneWithWhereWithoutBillingInput = {
    where?: insurance_providerWhereInput;
    data: XOR<insurance_providerUpdateWithoutBillingInput, insurance_providerUncheckedUpdateWithoutBillingInput>;
  };

  export type insurance_providerUpdateWithoutBillingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateWithoutBillingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    user_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type userUpsertWithoutBillingInput = {
    update: XOR<userUpdateWithoutBillingInput, userUncheckedUpdateWithoutBillingInput>;
    create: XOR<userCreateWithoutBillingInput, userUncheckedCreateWithoutBillingInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutBillingInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutBillingInput, userUncheckedUpdateWithoutBillingInput>;
  };

  export type userUpdateWithoutBillingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutBillingInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutClinicInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    user_appointment_healthcare_provider_idTouser: userCreateNestedOneWithoutAppointment_appointment_healthcare_provider_idTouserInput;
    user_appointment_patient_idTouser: userCreateNestedOneWithoutAppointment_appointment_patient_idTouserInput;
    billing?: billingCreateNestedManyWithoutAppointmentInput;
    medical_record?: medical_recordCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutClinicInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    patient_id: string;
    healthcare_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    billing?: billingUncheckedCreateNestedManyWithoutAppointmentInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentCreateOrConnectWithoutClinicInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>;
  };

  export type appointmentCreateManyClinicInputEnvelope = {
    data: appointmentCreateManyClinicInput | appointmentCreateManyClinicInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutClinicInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutClinicInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutClinicInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
  };

  export type appointmentUpsertWithWhereUniqueWithoutClinicInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<appointmentUpdateWithoutClinicInput, appointmentUncheckedUpdateWithoutClinicInput>;
    create: XOR<appointmentCreateWithoutClinicInput, appointmentUncheckedCreateWithoutClinicInput>;
  };

  export type appointmentUpdateWithWhereUniqueWithoutClinicInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<appointmentUpdateWithoutClinicInput, appointmentUncheckedUpdateWithoutClinicInput>;
  };

  export type appointmentUpdateManyWithWhereWithoutClinicInput = {
    where: appointmentScalarWhereInput;
    data: XOR<appointmentUpdateManyMutationInput, appointmentUncheckedUpdateManyWithoutClinicInput>;
  };

  export type appointmentScalarWhereInput = {
    AND?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    OR?: appointmentScalarWhereInput[];
    NOT?: appointmentScalarWhereInput | appointmentScalarWhereInput[];
    id?: UuidFilter<'appointment'> | string;
    appointment_date?: DateTimeFilter<'appointment'> | Date | string;
    appointment_time?: StringFilter<'appointment'> | string;
    status?: StringFilter<'appointment'> | string;
    patient_id?: UuidFilter<'appointment'> | string;
    clinic_id?: UuidFilter<'appointment'> | string;
    healthcare_provider_id?: UuidFilter<'appointment'> | string;
    created_at?: DateTimeFilter<'appointment'> | Date | string;
    updated_at?: DateTimeFilter<'appointment'> | Date | string;
  };

  export type userUpsertWithoutClinicInput = {
    update: XOR<userUpdateWithoutClinicInput, userUncheckedUpdateWithoutClinicInput>;
    create: XOR<userCreateWithoutClinicInput, userUncheckedCreateWithoutClinicInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutClinicInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutClinicInput, userUncheckedUpdateWithoutClinicInput>;
  };

  export type userUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type billingCreateWithoutInsurance_providerInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment: appointmentCreateNestedOneWithoutBillingInput;
    user: userCreateNestedOneWithoutBillingInput;
  };

  export type billingUncheckedCreateWithoutInsurance_providerInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    appointment_id: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type billingCreateOrConnectWithoutInsurance_providerInput = {
    where: billingWhereUniqueInput;
    create: XOR<billingCreateWithoutInsurance_providerInput, billingUncheckedCreateWithoutInsurance_providerInput>;
  };

  export type billingCreateManyInsurance_providerInputEnvelope = {
    data: billingCreateManyInsurance_providerInput | billingCreateManyInsurance_providerInput[];
    skipDuplicates?: boolean;
  };

  export type userCreateWithoutInsurance_providerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingCreateNestedManyWithoutUserInput;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutInsurance_providerInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingUncheckedCreateNestedManyWithoutUserInput;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutInsurance_providerInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
  };

  export type billingUpsertWithWhereUniqueWithoutInsurance_providerInput = {
    where: billingWhereUniqueInput;
    update: XOR<billingUpdateWithoutInsurance_providerInput, billingUncheckedUpdateWithoutInsurance_providerInput>;
    create: XOR<billingCreateWithoutInsurance_providerInput, billingUncheckedCreateWithoutInsurance_providerInput>;
  };

  export type billingUpdateWithWhereUniqueWithoutInsurance_providerInput = {
    where: billingWhereUniqueInput;
    data: XOR<billingUpdateWithoutInsurance_providerInput, billingUncheckedUpdateWithoutInsurance_providerInput>;
  };

  export type billingUpdateManyWithWhereWithoutInsurance_providerInput = {
    where: billingScalarWhereInput;
    data: XOR<billingUpdateManyMutationInput, billingUncheckedUpdateManyWithoutInsurance_providerInput>;
  };

  export type userUpsertWithoutInsurance_providerInput = {
    update: XOR<userUpdateWithoutInsurance_providerInput, userUncheckedUpdateWithoutInsurance_providerInput>;
    create: XOR<userCreateWithoutInsurance_providerInput, userUncheckedCreateWithoutInsurance_providerInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutInsurance_providerInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutInsurance_providerInput, userUncheckedUpdateWithoutInsurance_providerInput>;
  };

  export type userUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUpdateManyWithoutUserNestedInput;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUncheckedUpdateManyWithoutUserNestedInput;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type userCreateWithoutInvoiceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingCreateNestedManyWithoutUserInput;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutInvoiceInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingUncheckedCreateNestedManyWithoutUserInput;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutInvoiceInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>;
  };

  export type userUpsertWithoutInvoiceInput = {
    update: XOR<userUpdateWithoutInvoiceInput, userUncheckedUpdateWithoutInvoiceInput>;
    create: XOR<userCreateWithoutInvoiceInput, userUncheckedCreateWithoutInvoiceInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutInvoiceInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutInvoiceInput, userUncheckedUpdateWithoutInvoiceInput>;
  };

  export type userUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUpdateManyWithoutUserNestedInput;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUncheckedUpdateManyWithoutUserNestedInput;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutMedical_recordInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    user_appointment_healthcare_provider_idTouser: userCreateNestedOneWithoutAppointment_appointment_healthcare_provider_idTouserInput;
    user_appointment_patient_idTouser: userCreateNestedOneWithoutAppointment_appointment_patient_idTouserInput;
    billing?: billingCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutMedical_recordInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    patient_id: string;
    clinic_id: string;
    healthcare_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    billing?: billingUncheckedCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentCreateOrConnectWithoutMedical_recordInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<appointmentCreateWithoutMedical_recordInput, appointmentUncheckedCreateWithoutMedical_recordInput>;
  };

  export type userCreateWithoutMedical_recordInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingCreateNestedManyWithoutUserInput;
    clinic?: clinicCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerCreateNestedManyWithoutUserInput;
    invoice?: invoiceCreateNestedManyWithoutUserInput;
  };

  export type userUncheckedCreateWithoutMedical_recordInput = {
    id?: string;
    email: string;
    firstName?: string | null;
    lastName?: string | null;
    roq_user_id: string;
    tenant_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_healthcare_provider_idTouserInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedCreateNestedManyWithoutUser_appointment_patient_idTouserInput;
    billing?: billingUncheckedCreateNestedManyWithoutUserInput;
    clinic?: clinicUncheckedCreateNestedManyWithoutUserInput;
    insurance_provider?: insurance_providerUncheckedCreateNestedManyWithoutUserInput;
    invoice?: invoiceUncheckedCreateNestedManyWithoutUserInput;
  };

  export type userCreateOrConnectWithoutMedical_recordInput = {
    where: userWhereUniqueInput;
    create: XOR<userCreateWithoutMedical_recordInput, userUncheckedCreateWithoutMedical_recordInput>;
  };

  export type appointmentUpsertWithoutMedical_recordInput = {
    update: XOR<appointmentUpdateWithoutMedical_recordInput, appointmentUncheckedUpdateWithoutMedical_recordInput>;
    create: XOR<appointmentCreateWithoutMedical_recordInput, appointmentUncheckedCreateWithoutMedical_recordInput>;
    where?: appointmentWhereInput;
  };

  export type appointmentUpdateToOneWithWhereWithoutMedical_recordInput = {
    where?: appointmentWhereInput;
    data: XOR<appointmentUpdateWithoutMedical_recordInput, appointmentUncheckedUpdateWithoutMedical_recordInput>;
  };

  export type appointmentUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    user_appointment_healthcare_provider_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_healthcare_provider_idTouserNestedInput;
    user_appointment_patient_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_patient_idTouserNestedInput;
    billing?: billingUpdateManyWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    billing?: billingUncheckedUpdateManyWithoutAppointmentNestedInput;
  };

  export type userUpsertWithoutMedical_recordInput = {
    update: XOR<userUpdateWithoutMedical_recordInput, userUncheckedUpdateWithoutMedical_recordInput>;
    create: XOR<userCreateWithoutMedical_recordInput, userUncheckedCreateWithoutMedical_recordInput>;
    where?: userWhereInput;
  };

  export type userUpdateToOneWithWhereWithoutMedical_recordInput = {
    where?: userWhereInput;
    data: XOR<userUpdateWithoutMedical_recordInput, userUncheckedUpdateWithoutMedical_recordInput>;
  };

  export type userUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUpdateManyWithoutUserNestedInput;
    clinic?: clinicUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUpdateManyWithoutUserNestedInput;
  };

  export type userUncheckedUpdateWithoutMedical_recordInput = {
    id?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    firstName?: NullableStringFieldUpdateOperationsInput | string | null;
    lastName?: NullableStringFieldUpdateOperationsInput | string | null;
    roq_user_id?: StringFieldUpdateOperationsInput | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_appointment_healthcare_provider_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_healthcare_provider_idTouserNestedInput;
    appointment_appointment_patient_idTouser?: appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserNestedInput;
    billing?: billingUncheckedUpdateManyWithoutUserNestedInput;
    clinic?: clinicUncheckedUpdateManyWithoutUserNestedInput;
    insurance_provider?: insurance_providerUncheckedUpdateManyWithoutUserNestedInput;
    invoice?: invoiceUncheckedUpdateManyWithoutUserNestedInput;
  };

  export type appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    user_appointment_patient_idTouser: userCreateNestedOneWithoutAppointment_appointment_patient_idTouserInput;
    billing?: billingCreateNestedManyWithoutAppointmentInput;
    medical_record?: medical_recordCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    patient_id: string;
    clinic_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    billing?: billingUncheckedCreateNestedManyWithoutAppointmentInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentCreateOrConnectWithoutUser_appointment_healthcare_provider_idTouserInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<
      appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput,
      appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput
    >;
  };

  export type appointmentCreateManyUser_appointment_healthcare_provider_idTouserInputEnvelope = {
    data:
      | appointmentCreateManyUser_appointment_healthcare_provider_idTouserInput
      | appointmentCreateManyUser_appointment_healthcare_provider_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentCreateWithoutUser_appointment_patient_idTouserInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    clinic: clinicCreateNestedOneWithoutAppointmentInput;
    user_appointment_healthcare_provider_idTouser: userCreateNestedOneWithoutAppointment_appointment_healthcare_provider_idTouserInput;
    billing?: billingCreateNestedManyWithoutAppointmentInput;
    medical_record?: medical_recordCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    clinic_id: string;
    healthcare_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    billing?: billingUncheckedCreateNestedManyWithoutAppointmentInput;
    medical_record?: medical_recordUncheckedCreateNestedManyWithoutAppointmentInput;
  };

  export type appointmentCreateOrConnectWithoutUser_appointment_patient_idTouserInput = {
    where: appointmentWhereUniqueInput;
    create: XOR<
      appointmentCreateWithoutUser_appointment_patient_idTouserInput,
      appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
    >;
  };

  export type appointmentCreateManyUser_appointment_patient_idTouserInputEnvelope = {
    data:
      | appointmentCreateManyUser_appointment_patient_idTouserInput
      | appointmentCreateManyUser_appointment_patient_idTouserInput[];
    skipDuplicates?: boolean;
  };

  export type billingCreateWithoutUserInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment: appointmentCreateNestedOneWithoutBillingInput;
    insurance_provider: insurance_providerCreateNestedOneWithoutBillingInput;
  };

  export type billingUncheckedCreateWithoutUserInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    appointment_id: string;
    insurance_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type billingCreateOrConnectWithoutUserInput = {
    where: billingWhereUniqueInput;
    create: XOR<billingCreateWithoutUserInput, billingUncheckedCreateWithoutUserInput>;
  };

  export type billingCreateManyUserInputEnvelope = {
    data: billingCreateManyUserInput | billingCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type clinicCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentCreateNestedManyWithoutClinicInput;
  };

  export type clinicUncheckedCreateWithoutUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
    appointment?: appointmentUncheckedCreateNestedManyWithoutClinicInput;
  };

  export type clinicCreateOrConnectWithoutUserInput = {
    where: clinicWhereUniqueInput;
    create: XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>;
  };

  export type clinicCreateManyUserInputEnvelope = {
    data: clinicCreateManyUserInput | clinicCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type insurance_providerCreateWithoutUserInput = {
    id?: string;
    name: string;
    contact_number: string;
    address: string;
    email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    billing?: billingCreateNestedManyWithoutInsurance_providerInput;
  };

  export type insurance_providerUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    contact_number: string;
    address: string;
    email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    billing?: billingUncheckedCreateNestedManyWithoutInsurance_providerInput;
  };

  export type insurance_providerCreateOrConnectWithoutUserInput = {
    where: insurance_providerWhereUniqueInput;
    create: XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>;
  };

  export type insurance_providerCreateManyUserInputEnvelope = {
    data: insurance_providerCreateManyUserInput | insurance_providerCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type invoiceCreateWithoutUserInput = {
    id?: string;
    payment_method?: string | null;
    invoice_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type invoiceUncheckedCreateWithoutUserInput = {
    id?: string;
    payment_method?: string | null;
    invoice_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type invoiceCreateOrConnectWithoutUserInput = {
    where: invoiceWhereUniqueInput;
    create: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>;
  };

  export type invoiceCreateManyUserInputEnvelope = {
    data: invoiceCreateManyUserInput | invoiceCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type medical_recordCreateWithoutUserInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    notes?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    appointment: appointmentCreateNestedOneWithoutMedical_recordInput;
  };

  export type medical_recordUncheckedCreateWithoutUserInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    notes?: string | null;
    appointment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateOrConnectWithoutUserInput = {
    where: medical_recordWhereUniqueInput;
    create: XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>;
  };

  export type medical_recordCreateManyUserInputEnvelope = {
    data: medical_recordCreateManyUserInput | medical_recordCreateManyUserInput[];
    skipDuplicates?: boolean;
  };

  export type appointmentUpsertWithWhereUniqueWithoutUser_appointment_healthcare_provider_idTouserInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<
      appointmentUpdateWithoutUser_appointment_healthcare_provider_idTouserInput,
      appointmentUncheckedUpdateWithoutUser_appointment_healthcare_provider_idTouserInput
    >;
    create: XOR<
      appointmentCreateWithoutUser_appointment_healthcare_provider_idTouserInput,
      appointmentUncheckedCreateWithoutUser_appointment_healthcare_provider_idTouserInput
    >;
  };

  export type appointmentUpdateWithWhereUniqueWithoutUser_appointment_healthcare_provider_idTouserInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<
      appointmentUpdateWithoutUser_appointment_healthcare_provider_idTouserInput,
      appointmentUncheckedUpdateWithoutUser_appointment_healthcare_provider_idTouserInput
    >;
  };

  export type appointmentUpdateManyWithWhereWithoutUser_appointment_healthcare_provider_idTouserInput = {
    where: appointmentScalarWhereInput;
    data: XOR<
      appointmentUpdateManyMutationInput,
      appointmentUncheckedUpdateManyWithoutUser_appointment_healthcare_provider_idTouserInput
    >;
  };

  export type appointmentUpsertWithWhereUniqueWithoutUser_appointment_patient_idTouserInput = {
    where: appointmentWhereUniqueInput;
    update: XOR<
      appointmentUpdateWithoutUser_appointment_patient_idTouserInput,
      appointmentUncheckedUpdateWithoutUser_appointment_patient_idTouserInput
    >;
    create: XOR<
      appointmentCreateWithoutUser_appointment_patient_idTouserInput,
      appointmentUncheckedCreateWithoutUser_appointment_patient_idTouserInput
    >;
  };

  export type appointmentUpdateWithWhereUniqueWithoutUser_appointment_patient_idTouserInput = {
    where: appointmentWhereUniqueInput;
    data: XOR<
      appointmentUpdateWithoutUser_appointment_patient_idTouserInput,
      appointmentUncheckedUpdateWithoutUser_appointment_patient_idTouserInput
    >;
  };

  export type appointmentUpdateManyWithWhereWithoutUser_appointment_patient_idTouserInput = {
    where: appointmentScalarWhereInput;
    data: XOR<
      appointmentUpdateManyMutationInput,
      appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserInput
    >;
  };

  export type billingUpsertWithWhereUniqueWithoutUserInput = {
    where: billingWhereUniqueInput;
    update: XOR<billingUpdateWithoutUserInput, billingUncheckedUpdateWithoutUserInput>;
    create: XOR<billingCreateWithoutUserInput, billingUncheckedCreateWithoutUserInput>;
  };

  export type billingUpdateWithWhereUniqueWithoutUserInput = {
    where: billingWhereUniqueInput;
    data: XOR<billingUpdateWithoutUserInput, billingUncheckedUpdateWithoutUserInput>;
  };

  export type billingUpdateManyWithWhereWithoutUserInput = {
    where: billingScalarWhereInput;
    data: XOR<billingUpdateManyMutationInput, billingUncheckedUpdateManyWithoutUserInput>;
  };

  export type clinicUpsertWithWhereUniqueWithoutUserInput = {
    where: clinicWhereUniqueInput;
    update: XOR<clinicUpdateWithoutUserInput, clinicUncheckedUpdateWithoutUserInput>;
    create: XOR<clinicCreateWithoutUserInput, clinicUncheckedCreateWithoutUserInput>;
  };

  export type clinicUpdateWithWhereUniqueWithoutUserInput = {
    where: clinicWhereUniqueInput;
    data: XOR<clinicUpdateWithoutUserInput, clinicUncheckedUpdateWithoutUserInput>;
  };

  export type clinicUpdateManyWithWhereWithoutUserInput = {
    where: clinicScalarWhereInput;
    data: XOR<clinicUpdateManyMutationInput, clinicUncheckedUpdateManyWithoutUserInput>;
  };

  export type clinicScalarWhereInput = {
    AND?: clinicScalarWhereInput | clinicScalarWhereInput[];
    OR?: clinicScalarWhereInput[];
    NOT?: clinicScalarWhereInput | clinicScalarWhereInput[];
    id?: UuidFilter<'clinic'> | string;
    description?: StringNullableFilter<'clinic'> | string | null;
    location?: StringNullableFilter<'clinic'> | string | null;
    opening_hours?: StringNullableFilter<'clinic'> | string | null;
    closing_hours?: StringNullableFilter<'clinic'> | string | null;
    name?: StringFilter<'clinic'> | string;
    created_at?: DateTimeFilter<'clinic'> | Date | string;
    updated_at?: DateTimeFilter<'clinic'> | Date | string;
    user_id?: UuidFilter<'clinic'> | string;
    tenant_id?: StringFilter<'clinic'> | string;
  };

  export type insurance_providerUpsertWithWhereUniqueWithoutUserInput = {
    where: insurance_providerWhereUniqueInput;
    update: XOR<insurance_providerUpdateWithoutUserInput, insurance_providerUncheckedUpdateWithoutUserInput>;
    create: XOR<insurance_providerCreateWithoutUserInput, insurance_providerUncheckedCreateWithoutUserInput>;
  };

  export type insurance_providerUpdateWithWhereUniqueWithoutUserInput = {
    where: insurance_providerWhereUniqueInput;
    data: XOR<insurance_providerUpdateWithoutUserInput, insurance_providerUncheckedUpdateWithoutUserInput>;
  };

  export type insurance_providerUpdateManyWithWhereWithoutUserInput = {
    where: insurance_providerScalarWhereInput;
    data: XOR<insurance_providerUpdateManyMutationInput, insurance_providerUncheckedUpdateManyWithoutUserInput>;
  };

  export type insurance_providerScalarWhereInput = {
    AND?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
    OR?: insurance_providerScalarWhereInput[];
    NOT?: insurance_providerScalarWhereInput | insurance_providerScalarWhereInput[];
    id?: UuidFilter<'insurance_provider'> | string;
    name?: StringFilter<'insurance_provider'> | string;
    contact_number?: StringFilter<'insurance_provider'> | string;
    address?: StringFilter<'insurance_provider'> | string;
    email?: StringFilter<'insurance_provider'> | string;
    user_id?: UuidFilter<'insurance_provider'> | string;
    created_at?: DateTimeFilter<'insurance_provider'> | Date | string;
    updated_at?: DateTimeFilter<'insurance_provider'> | Date | string;
  };

  export type invoiceUpsertWithWhereUniqueWithoutUserInput = {
    where: invoiceWhereUniqueInput;
    update: XOR<invoiceUpdateWithoutUserInput, invoiceUncheckedUpdateWithoutUserInput>;
    create: XOR<invoiceCreateWithoutUserInput, invoiceUncheckedCreateWithoutUserInput>;
  };

  export type invoiceUpdateWithWhereUniqueWithoutUserInput = {
    where: invoiceWhereUniqueInput;
    data: XOR<invoiceUpdateWithoutUserInput, invoiceUncheckedUpdateWithoutUserInput>;
  };

  export type invoiceUpdateManyWithWhereWithoutUserInput = {
    where: invoiceScalarWhereInput;
    data: XOR<invoiceUpdateManyMutationInput, invoiceUncheckedUpdateManyWithoutUserInput>;
  };

  export type invoiceScalarWhereInput = {
    AND?: invoiceScalarWhereInput | invoiceScalarWhereInput[];
    OR?: invoiceScalarWhereInput[];
    NOT?: invoiceScalarWhereInput | invoiceScalarWhereInput[];
    id?: UuidFilter<'invoice'> | string;
    payment_method?: StringNullableFilter<'invoice'> | string | null;
    invoice_status?: StringNullableFilter<'invoice'> | string | null;
    user_id?: UuidFilter<'invoice'> | string;
    created_at?: DateTimeFilter<'invoice'> | Date | string;
    updated_at?: DateTimeFilter<'invoice'> | Date | string;
  };

  export type medical_recordUpsertWithWhereUniqueWithoutUserInput = {
    where: medical_recordWhereUniqueInput;
    update: XOR<medical_recordUpdateWithoutUserInput, medical_recordUncheckedUpdateWithoutUserInput>;
    create: XOR<medical_recordCreateWithoutUserInput, medical_recordUncheckedCreateWithoutUserInput>;
  };

  export type medical_recordUpdateWithWhereUniqueWithoutUserInput = {
    where: medical_recordWhereUniqueInput;
    data: XOR<medical_recordUpdateWithoutUserInput, medical_recordUncheckedUpdateWithoutUserInput>;
  };

  export type medical_recordUpdateManyWithWhereWithoutUserInput = {
    where: medical_recordScalarWhereInput;
    data: XOR<medical_recordUpdateManyMutationInput, medical_recordUncheckedUpdateManyWithoutUserInput>;
  };

  export type billingCreateManyAppointmentInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    patient_id: string;
    insurance_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateManyAppointmentInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    notes?: string | null;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type billingUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutBillingNestedInput;
    user?: userUpdateOneRequiredWithoutBillingNestedInput;
  };

  export type billingUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type billingUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user?: userUpdateOneRequiredWithoutMedical_recordNestedInput;
  };

  export type medical_recordUncheckedUpdateWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUncheckedUpdateManyWithoutAppointmentInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyClinicInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    patient_id: string;
    healthcare_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    user_appointment_healthcare_provider_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_healthcare_provider_idTouserNestedInput;
    user_appointment_patient_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_patient_idTouserNestedInput;
    billing?: billingUpdateManyWithoutAppointmentNestedInput;
    medical_record?: medical_recordUpdateManyWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    billing?: billingUncheckedUpdateManyWithoutAppointmentNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateManyWithoutClinicInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type billingCreateManyInsurance_providerInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    appointment_id: string;
    patient_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type billingUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateOneRequiredWithoutBillingNestedInput;
    user?: userUpdateOneRequiredWithoutBillingNestedInput;
  };

  export type billingUncheckedUpdateWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    appointment_id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type billingUncheckedUpdateManyWithoutInsurance_providerInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    appointment_id?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentCreateManyUser_appointment_healthcare_provider_idTouserInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    patient_id: string;
    clinic_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentCreateManyUser_appointment_patient_idTouserInput = {
    id?: string;
    appointment_date: Date | string;
    appointment_time: string;
    status: string;
    clinic_id: string;
    healthcare_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type billingCreateManyUserInput = {
    id?: string;
    billing_date: Date | string;
    total_amount: number;
    status: string;
    appointment_id: string;
    insurance_provider_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type clinicCreateManyUserInput = {
    id?: string;
    description?: string | null;
    location?: string | null;
    opening_hours?: string | null;
    closing_hours?: string | null;
    name: string;
    created_at?: Date | string;
    updated_at?: Date | string;
    tenant_id: string;
  };

  export type insurance_providerCreateManyUserInput = {
    id?: string;
    name: string;
    contact_number: string;
    address: string;
    email: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type invoiceCreateManyUserInput = {
    id?: string;
    payment_method?: string | null;
    invoice_status?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type medical_recordCreateManyUserInput = {
    id?: string;
    diagnosis: string;
    prescription: string;
    notes?: string | null;
    appointment_id: string;
    created_at?: Date | string;
    updated_at?: Date | string;
  };

  export type appointmentUpdateWithoutUser_appointment_healthcare_provider_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    user_appointment_patient_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_patient_idTouserNestedInput;
    billing?: billingUpdateManyWithoutAppointmentNestedInput;
    medical_record?: medical_recordUpdateManyWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutUser_appointment_healthcare_provider_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    billing?: billingUncheckedUpdateManyWithoutAppointmentNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateManyWithoutUser_appointment_healthcare_provider_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    patient_id?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type appointmentUpdateWithoutUser_appointment_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    clinic?: clinicUpdateOneRequiredWithoutAppointmentNestedInput;
    user_appointment_healthcare_provider_idTouser?: userUpdateOneRequiredWithoutAppointment_appointment_healthcare_provider_idTouserNestedInput;
    billing?: billingUpdateManyWithoutAppointmentNestedInput;
    medical_record?: medical_recordUpdateManyWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateWithoutUser_appointment_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    billing?: billingUncheckedUpdateManyWithoutAppointmentNestedInput;
    medical_record?: medical_recordUncheckedUpdateManyWithoutAppointmentNestedInput;
  };

  export type appointmentUncheckedUpdateManyWithoutUser_appointment_patient_idTouserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    appointment_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment_time?: StringFieldUpdateOperationsInput | string;
    status?: StringFieldUpdateOperationsInput | string;
    clinic_id?: StringFieldUpdateOperationsInput | string;
    healthcare_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type billingUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateOneRequiredWithoutBillingNestedInput;
    insurance_provider?: insurance_providerUpdateOneRequiredWithoutBillingNestedInput;
  };

  export type billingUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    appointment_id?: StringFieldUpdateOperationsInput | string;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type billingUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    billing_date?: DateTimeFieldUpdateOperationsInput | Date | string;
    total_amount?: IntFieldUpdateOperationsInput | number;
    status?: StringFieldUpdateOperationsInput | string;
    appointment_id?: StringFieldUpdateOperationsInput | string;
    insurance_provider_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type clinicUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
    appointment?: appointmentUncheckedUpdateManyWithoutClinicNestedInput;
  };

  export type clinicUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    description?: NullableStringFieldUpdateOperationsInput | string | null;
    location?: NullableStringFieldUpdateOperationsInput | string | null;
    opening_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    closing_hours?: NullableStringFieldUpdateOperationsInput | string | null;
    name?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    tenant_id?: StringFieldUpdateOperationsInput | string;
  };

  export type insurance_providerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    billing?: billingUpdateManyWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    billing?: billingUncheckedUpdateManyWithoutInsurance_providerNestedInput;
  };

  export type insurance_providerUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    name?: StringFieldUpdateOperationsInput | string;
    contact_number?: StringFieldUpdateOperationsInput | string;
    address?: StringFieldUpdateOperationsInput | string;
    email?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type invoiceUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    invoice_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type invoiceUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    invoice_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type invoiceUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    payment_method?: NullableStringFieldUpdateOperationsInput | string | null;
    invoice_status?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    appointment?: appointmentUpdateOneRequiredWithoutMedical_recordNestedInput;
  };

  export type medical_recordUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  export type medical_recordUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string;
    diagnosis?: StringFieldUpdateOperationsInput | string;
    prescription?: StringFieldUpdateOperationsInput | string;
    notes?: NullableStringFieldUpdateOperationsInput | string | null;
    appointment_id?: StringFieldUpdateOperationsInput | string;
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string;
  };

  /**
   * Aliases for legacy arg types
   */
  /**
   * @deprecated Use AppointmentCountOutputTypeDefaultArgs instead
   */
  export type AppointmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    AppointmentCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use ClinicCountOutputTypeDefaultArgs instead
   */
  export type ClinicCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    ClinicCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use Insurance_providerCountOutputTypeDefaultArgs instead
   */
  export type Insurance_providerCountOutputTypeArgs<
    ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs,
  > = Insurance_providerCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use UserCountOutputTypeDefaultArgs instead
   */
  export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    UserCountOutputTypeDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use appointmentDefaultArgs instead
   */
  export type appointmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    appointmentDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use billingDefaultArgs instead
   */
  export type billingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    billingDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use clinicDefaultArgs instead
   */
  export type clinicArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    clinicDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use insurance_providerDefaultArgs instead
   */
  export type insurance_providerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    insurance_providerDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use invoiceDefaultArgs instead
   */
  export type invoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    invoiceDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use medical_recordDefaultArgs instead
   */
  export type medical_recordArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    medical_recordDefaultArgs<ExtArgs>;
  /**
   * @deprecated Use userDefaultArgs instead
   */
  export type userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = userDefaultArgs<ExtArgs>;

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number;
  };

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF;
}
