/// <reference types="react-scripts" />
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      REACT_APP_GALLERY_API_BASE_URL: string;
      REACT_APP_GALLERY_WS_URI: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
