interface ApiResponse {
	status: string;
	statusCode: number;
	message: string;
	data: Record<string, any>;
  }
  
  const responses: {
	success: ApiResponse;
	error: ApiResponse;
  } = {
	success: {
	  status: 'success',
	  statusCode: 200,
	  message: 'Operation Successful',
	  data: {},
	},
	error: {
	  status: 'failed',
	  statusCode: 400,
	  message: 'Operation Failed',
	  data: {},
	},
  };
  
  export default responses;
  