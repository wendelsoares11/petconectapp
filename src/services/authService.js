export const registerUser = async (data) => {
    try {
      const response = await fetch('http://192.168.1.18:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
  
      if (!response.ok) {
        throw new Error(`Erro: ${response.statusText}`);
      }
  
      const responseData = await response.json();
      console.log('Usuário cadastrado:', responseData);
      return responseData;
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
      throw new Error('Erro ao cadastrar usuário');
    }
  };
  
  