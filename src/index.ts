import axios from "axios";
import fs from "fs";

const getInformation = async () => {
  const response = await axios.get(
    "https://bi.static.es.gov.br/covid19/MICRODADOS.csv"
  );

  fs.writeFile(
    `/home/matheus/${response.headers["last-modified"]}.csv`,{enconding:'utf-8',flag: 'w'}, 
    response.data,
    (error) => {
      if (error) {
        throw error;
      }
      console.log(__dirname,"Arquivo salvo");
    }
  );
};
getInformation();
