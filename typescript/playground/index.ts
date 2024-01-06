type DatoTr = {
  tag: string;
  descripcion: string;
  tipo_senal: string;
  unidad: string;
  tendencia: string;
  origen: string;
  ultimo_valor: string;
  ultima_fecha: string;
  valores_ultimo_dia: string;
};

type Contenido = {
  codigo: string;
  nombre: string;
  tipo_remota: string;
  rio: string;
  zona: string;
  num_camaras: number;
  datos_tr: DatoTr[];
};

export type PantanoResponse = {
  contenido: Contenido;
};

// export const getPantanoStatus = async (): Promise<PantanoResponse> => {
//   let response = await fetch(
//     `https://saihtajo.chtajo.es/ajax.php?url=%2Ftr%2Fajax_datos_estacion%2Festacion%3AE_19`,
//     {
//       method: "GET",
//     }
//   );
//   console.log(response.status);
//   console.log(response.statusText);
//   console.log(response.formData());
//   console.log(response.status);
//   console.log(response.status);
//   return response.json();
// };

// getPantanoStatus().then((response) => {
//   console.log(response);
// });

// fetch(
//     `https://saihtajo.chtajo.es/ajax.php?url=%2Ftr%2Fajax_datos_estacion%2Festacion%3AE_19`,
//     {
//       method: "GET",
//       headers: {
//         "Accept": "*/*",
//         "User-Agent": "Thunder Client (https://www.thunderclient.com)"
//       }
//     }
//   ).then(res => res.text())
//   .then(text => console.log(text))

let headersList = {
  Accept: "*/*",
  "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36",
};

fetch(
  "https://saihtajo.chtajo.es/ajax.php?url=%2Ftr%2Fajax_datos_estacion%2Festacion%3AE_19",
  {
    method: "GET",
    headers: headersList,
  }
).then((res) => res.text())
.then(text => console.log(text));
