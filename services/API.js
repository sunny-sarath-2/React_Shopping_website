import serviceBase from "./serviceBase";
const productService = {
  /**
   * Gets current user
   * @returns {*}
   */
  getSession: data => serviceBase.get(`/login`),
  getSessionInsert: data => serviceBase.get(`/insert`),
  insert: data => serviceBase.post(`/insert`)
};

export default productService;
