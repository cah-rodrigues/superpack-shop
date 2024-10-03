export async function getData() {
    const url = "https://api-candidate.ogruposix.com/checkout/95BD9233-8FDC-48AD-B4C5-E5BAF7578C15";
    const response = await fetch(url, { 
      headers: { 
        'user-token': '2A50C22E-7954-4C73-9CF9-F6D298C047A7' 
      } 
    });
    
    const json = await response.json();
    const data = json.object[0];
  
    return {
      video: {
        url: data.video_url,
        headline: data.video_headline,
        subheadline: data.video_sub_headline
      },
      products: data.products
    };
  }
  