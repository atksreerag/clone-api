interface EnvironmentConfig {
	ENVIRONMENT: string;
	BASE_URL: string;
	DB_DEBUG: string;
	DB_URL: string;
  }
  
  const config: EnvironmentConfig = {
	ENVIRONMENT: process.env.ENVIRONMENT || '',
	BASE_URL: process.env.BASE_URL || '',
	DB_DEBUG: process.env.DB_DEBUG || '',
	DB_URL: process.env.DB_URL || '',
  };
  
  export default config;
  