const apiKeyUser = "YOUR_API"; // No requerida por ahora!

export async function makeImg(promtImg) {
  const apiUrl = "https://apiopenai.esleiter.com/v1/images/generations";

  // Datos para enviar en la petición
  const requestData = {
    model: "dall-e-3",
    prompt: promtImg,
    n: 1,
    size: "1792x1024",
  };

  // Opciones de configuración para la petición
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKeyUser}`,
    },
    body: JSON.stringify(requestData),
  };

  try {
    // Realizar la petición a la API
    const response = await fetch(apiUrl, requestOptions);
    const data = await response.json();

    // Manejar la respuesta de la API
    return data.data[0].url;
  } catch (error) {
    // Manejar cualquier error de la petición
    console.error("Error:", error);
  }
}

export async function makeText(prompt, tks) {
  const modelId = "gpt-3.5-turbo-instruct";
  const data = {
    prompt: prompt,
    max_tokens: tks,
    temperature: 0.3,
  };

  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKeyUser}`,
    },
    body: JSON.stringify(data),
  };

  // Envío de la solicitud a la API
  const response = await fetch(
    `https://apiopenai.esleiter.com/v1/engines/${modelId}/completions`,
    requestOptions
  );
  const jsonResponse = await response.json();
  return jsonResponse.choices[0].text.trim();
}
