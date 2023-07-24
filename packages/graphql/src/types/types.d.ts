export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AuthenticatedUser = {
  __typename?: 'AuthenticatedUser';
  meta: Meta;
  user: User;
};

export type Hello = {
  __typename?: 'Hello';
  message?: Maybe<Scalars['String']['output']>;
};

export type Meta = {
  __typename?: 'Meta';
  token: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAccount: AuthenticatedUser;
  createSession: AuthenticatedUser;
};


export type MutationCreateAccountArgs = {
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
  username: Scalars['String']['input'];
};


export type MutationCreateSessionArgs = {
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  sayHello?: Maybe<Hello>;
};

export type User = {
  __typename?: 'User';
  password?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  uuid: Scalars['String']['output'];
};
