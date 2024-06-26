export const verifyRequest = async (did: string) => {
  // Prepare the request payload
  const payload = {
	did
  };

  try {
	const response = await fetch('/api/your-endpoint', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json'
	  },
	  body: JSON.stringify(payload)
	});

	if (response.ok) {
	  const data = await response.json();
	  console.log(data.message); // Successfully created
	} else {
	  const errorData = await response.json();
	  console.error(errorData.error);
	}
  } catch (error) {
	console.error('An unexpected error occurred:', error);
  }
};