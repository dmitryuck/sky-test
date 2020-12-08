export default class ResponseObject {
  static success(res, payload) {
    const serverResponse = { status: 'success', payload };

    return res.json(serverResponse);
  }

  static fail(res, payload) {
    const serverResponse = { status: 'fail', payload };

    return res.json(serverResponse);
  }
}
