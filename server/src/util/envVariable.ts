class EnvErrorReporter {
    public apiKey: string;
  
    constructor(apiKey: string| undefined, envKeyName: string) {
      if (apiKey === undefined || apiKey === "") {
        throw new Error(`${envKeyName} apiKey required`)
      }
      this.apiKey = apiKey
    }
  }
  
  export default EnvErrorReporter