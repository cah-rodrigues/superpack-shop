export async function getData() {
  const url = "https://api-candidate.ogruposix.com/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15";
  const token = "2A50C22E-7954-4C73-9CF9-F6D298C047A7"; // Token da API

  try {
    const response = await fetch(url, {
      headers: {
        'user-token': token,
      },
    });

    if (!response.ok) {
      throw new Error("Erro ao buscar os dados da API");
    }

    const data = await response.json();

    if (!data || !data.object || data.object.length === 0) {
      throw new Error("Dados da API estão vazios ou inválidos");
    }

    const apiData = data.object[0];
    
    return {
      video: {
        url: apiData.video_url,
        headline: apiData.video_headline,
        subheadline: apiData.video_sub_headline || null,
      },
      products: apiData.products || [], // Verificando se `products` existe antes de mapear
    };
  } catch (error) {
    console.error("Erro ao obter dados da API:", error);
    return { video: {}, products: [] }; // Retornando arrays e objetos vazios em caso de erro
  }
}
