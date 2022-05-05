const swaggerDocs = {
    swagger: "2.0",
    info: {
      version: "1.0.0",
      title: "REST API Kochbuch",
      description: "Kochbuch mit Rezepten, Zutaten und Naehrwerten",
    },
    host: "localhost:4000",
    basePath: "/kochbuch",
    tags: [
      {
        name: "Rezept",
        description: "Rezepte des Kochbuches",
      },
      {
        name: "Zutaten",
        description: "Zutaten der Rezepte",
      },
      {
        name: "Naehrwerte",
        description: "Naehrwerte der Rezepte",
      },
    ],
    consumes: ["application/json"],
    produces: ["application/json"],
    paths: {
      "/rezepte": {
        get: {
          tags: ["Rezept"],
          summary: "Gibt alle Rezepte der Datenbank aus",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/RezeptOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/rezepte/searchId/{id}": {
        get: {
          tags: ["Rezept"],
          summary: "Gibt das Rezept mit der entsprechenden Id aus",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Id des gesuchten Rezeptes",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/RezeptOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/rezepte/search/{rezept}": {
        get: {
          tags: ["Rezept"],
          summary: "Gibt die Rezepte mit dem entsprechenden Rezeptnamen aus",
          parameters: [
            {
              name: "rezept",
              in: "path",
              description: "Name des gesuchten Rezeptes",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/RezeptOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/rezepte/add": {
        post: {
          tags: ["Rezept"],
          summary: "Fuegt ein neues Rezept in die Datenbank ein",
          parameters: [
            {
              name: "rezept",
              in: "body",
              description: "rezept: Name des neuen Rezeptes \n dauer: Dauer des neuen Rezeptes \n zubereitung: Zubereitung des neuen Rezeptes \n schwierigkeitsgrad: Schwierigkeitsgrad des neuen Rezeptes",
              schema: {
                $ref: "#/definitions/NewRezeptBody",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/RezeptOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/rezepte/update/{id}": {
        put: {
          tags: ["Rezept"],
          summary: "Ein bestimmtes Rezept ueberarbeiten",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Id des zu bearbeitenden Rezeptes",
            },
            {
              name: "rezept",
              in: "body",
              description: "rezept: Name des neuen Rezeptes \n dauer: Dauer des neuen Rezeptes \n zubereitung: Zubereitung des neuen Rezeptes \n schwierigkeitsgrad: Schwierigkeitsgrad des neuen Rezeptes",
              schema: {
                $ref: "#/definitions/NewRezeptBody",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/RezeptOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/rezepte/delete/{id}": {
        delete: {
          tags: ["Rezept"],
          summary: "Loescht das Rezept mit der entsprechenden Id",
          parameters: [
            {
              name: "id",
              in: "path",
              description: "Id des zu loeschenden rezeptes",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/EntryDeleted",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },


      "/zutaten": {
        get: {
          tags: ["Zutaten"],
          summary: "Gibt alle Zutaten der Datenbank aus",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/ZutatenOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/zutaten/search/{rezept}": {
        get: {
          tags: ["Zutaten"],
          summary: "Gibt die Zutaten mit dem entsprechenden Rezeptnamen aus",
          parameters: [
            {
              name: "rezept",
              in: "path",
              description: "Rezept zu den gesuchten Zutaten",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/ZutatenOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/zutaten/add": {
        post: {
          tags: ["Zutaten"],
          summary: "Fuegt neue Zutaten in die Datenbank ein",
          parameters: [
            {
              name: "zutaten",
              in: "body",
              description: "rezept: Name des Rezeptes \n zutaten_2P: Zutaten fuer 2 personen \n zutaten_4P: Zutaten fuer 4 personen \n zutaten_8P: Zutaten fuer 8 personen",
              schema: {
                $ref: "#/definitions/NewZutatenBody",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/ZutatenOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/zutaten/update/{rezept}": {
        put: {
          tags: ["Zutaten"],
          summary: "Bestimmte Zutaten ueberarbeiten",
          parameters: [
            {
              name: "rezept",
              in: "path",
              description: "Rezept zu den zu ueberarbeitenden Zutaten",
            },
            {
              name: "zutaten",
              in: "body",
              description: "rezept: Name des Rezeptes \n zutaten_2P: Zutaten fuer 2 personen \n zutaten_4P: Zutaten fuer 4 personen \n zutaten_8P: Zutaten fuer 8 personen",
              schema: {
                $ref: "#/definitions/NewZutatenBody",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/ZutatenOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/zutaten/delete/{rezept}": {
        delete: {
          tags: ["Zutaten"],
          summary: "Löscht die Zutaten des uebergebenen Rezeptes",
          parameters: [
            {
              name: "rezept",
              in: "path",
              description: "Rezept zu den zu loeschenden Zutaten",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/EntryDeleted",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },


      "/naehrwerte": {
        get: {
          tags: ["Naehrwerte"],
          summary: "Gibt alle Naehrwerte der Datenbank aus",
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/NaehrwerteOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/naehrwerte/search/{rezept}": {
        get: {
          tags: ["Naehrwerte"],
          summary: "Gibt die Naehrwerte mit dem entsprechenden Rezeptnamen aus",
          parameters: [
            {
              name: "rezept",
              in: "path",
              description: "Rezept zu den gesuchten Naehrwerten",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/NaehrwerteOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/naehrwerte/add": {
        post: {
          tags: ["Naehrwerte"],
          summary: "Fuegt neue Naehrwerte in die Datenbank ein",
          parameters: [
            {
              name: "naehrwerte",
              in: "body",
              description: "rezept: Name des Rezeptes \n kalorien: Kalorien des Rezeptes \n kohlenhydrate: Kohlenhydrate des Rezeptes \n fett: Fett des Rezeptes \n eiweiß: Eiweiß des Rezeptes ",
              schema: {
                $ref: "#/definitions/NewNaehrwerteBody",
              },
            },
          ],
          responses: {
            201: {
              description: "Created",
              schema: {
                $ref: "#/definitions/NaehrwerteOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/naehrwerte/update/{rezept}": {
        put: {
          tags: ["Naehrwerte"],
          summary: "Bestimmte Naehrwerte ueberarbeiten",
          parameters: [
            {
              name: "rezept",
              in: "path",
              description: "Rezept zu den zu ueberarbeitenden Naehrwerten",
            },
            {
              name: "naehrwerte",
              in: "body",
              description: "rezept: Name des Rezeptes \n kalorien: Kalorien des Rezeptes \n kohlenhydrate: Kohlenhydrate des Rezeptes \n fett: Fett des Rezeptes \n eiweiß: Eiweiß des Rezeptes ",
              schema: {
                $ref: "#/definitions/NewNaehrwerteBody",
              },
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/NaehrwerteOkResponse",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },
      "/naehrwerte/delete/{rezept}": {
        delete: {
          tags: ["Naehrwerte"],
          summary: "Löscht die Naehrwerte des uebergebenen Rezeptes",
          parameters: [
            {
              name: "rezept",
              in: "path",
              description: "Rezept zu den zu loeschenden Naehrwerten",
            },
          ],
          responses: {
            200: {
              description: "OK",
              schema: {
                $ref: "#/definitions/EntryDeleted",
              },
            },
            400: {
              description: "Bad Request",
              schema: {
                $ref: "#/definitions/BadRequest",
              },
            },
          },
        },
      },




      
    },

    
    definitions: {
      RezeptOkResponse: {
        required: ["rezept", "dauer", "zubereitung", "schwierigkeitsgrad"],
        properties: {
          _id: {
            type: "string",
            uniqueItems: true,
          },
          rezept: {
            type: "string",
          },
          dauer: {
            type: "string",
          },
          zubereitung: {
            type: "string",
          },
          schwierigkeitsgrad: {
            type: "number",
          },
        },
      },
      NewRezeptBody: {
        required: ["rezept", "dauer", "zubereitung", "schwierigkeitsgrad"],
        properties: {
          rezept: {
            type: "string",
          },
          dauer: {
            type: "string",
          },
          zubereitung: {
            type: "string",
          },
          schwierigkeitsgrad: {
            type: "number",
          },
        },
      },
      ZutatenOkResponse: {
        required: ["rezept", "zutaten_2P", "zutaten_4P", "zutaten_8P"],
        properties: {
          _id: {
            type: "string",
            uniqueItems: true,
          },
          rezept: {
            type: "string",
          },
          zutaten_2P: {
            type: "string",
          },
          zutaten_4P: {
            type: "string",
          },
          zutaten_8P: {
            type: "string",
          },
        },
      },
      NewZutatenBody: {
        required: ["rezept", "zutaten_2P", "zutaten_4P", "zutaten_8P"],
        properties: {
          rezept: {
            type: "string",
          },
          zutaten_2P: {
            type: "string",
          },
          zutaten_4P: {
            type: "string",
          },
          zutaten_8P: {
            type: "string",
          },
        },
      },
      NaehrwerteOkResponse: {
        required: ["rezept", "kalorien", "kohlenhydrate", "fett", "eiweiß"],
        properties: {
          _id: {
            type: "string",
            uniqueItems: true,
          },
          rezept: {
            type: "string",
          },
          kalorien: {
            type: "string",
          },
          kohlenhydrate: {
            type: "string",
          },
          fett: {
            type: "string",
          },
          eiweiß: {
            type: "string",
          },
        },
      },
      NewNaehrwerteBody: {
        required: ["rezept", "kalorien", "kohlenhydrate", "fett", "eiweiß"],
        properties: {
          rezept: {
            type: "string",
          },
          kalorien: {
            type: "string",
          },
          kohlenhydrate: {
            type: "string",
          },
          fett: {
            type: "string",
          },
          eiweiß: {
            type: "string",
          },
        },
      },
      EntryDeleted: {
        properties: {
          Geloescht: {
            type: "string",
          },
        },
      },
      BadRequest: {
        properties: {
          errorMessage: {
            type: "string",
          },
        },
      },
    },
  };
  
  export default swaggerDocs;