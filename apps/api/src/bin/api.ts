import { createServer } from '@/graphql/createServer'
import { createBusiness } from '@/business/createBusiness'
import { createIamService } from '@/iam/createIamService'
import { connectDatabase } from '@/database'
import * as Env from './env'
import { Logger, logger, waitForSignal } from '@klat/toolbox'
import * as fs from 'fs'

const api = async (logger: Logger) => {
  // database
  const database = connectDatabase({
    logger,
    connectionPoolSize: Env.DATABASE_CONNECTION_POOL_SIZE,
    databaseUrl: Env.DATABASE_URL,
    queryTimeout: Env.DATABASE_QUERY_TIMEOUT,
  })

  // services
  const iamService = createIamService({
    logger,
    database,
    jwtDuration: Env.JWT_DURATION,
    jwtSecretKey: Env.JWT_SECRET,
  })

  const business = createBusiness({
    logger,
    database,
    iamService,
  })

  //let's rock 🚀
  const graphqlServer = await createServer({
    logger,
    business,
    enableDebug: Env.GRAPHQL_DEBUG,
    typeDefs: fs.readFileSync(Env.GRAPHQL_SCHEMA_PATH, 'utf-8'),
    enableIntrospection: Env.GRAPHQL_ENABLE_INTROSPECTION,
    keepAliveTimeout: Env.GRAPHQL_KEEP_ALIVE_TIMEOUT,
    listenAddr: Env.LISTEN_ADDR,
    mountPath: Env.GRAPHQL_MOUNT_PATH,
  })

  await database.start()
  await graphqlServer.start()
  await waitForSignal(['SIGINT', 'SIGTERM'])
  await graphqlServer.stop()
  await database.stop()
}

api(logger).catch(err => {
  console.log(err)
  process.exit(0)
})
