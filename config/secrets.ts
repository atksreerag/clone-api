interface AppConfig {
	JWT_SECRET_KEY: string | undefined;
	JWT_REFRESH_SECRET_KEY: string | undefined;
  }
  
  const appConfig: AppConfig = {
	JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
	JWT_REFRESH_SECRET_KEY: process.env.JWT_REFRESH_SECRET_KEY,
  };
  
  export default appConfig;
  