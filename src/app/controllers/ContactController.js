class ContactController {
  index(request, response) {
    response.send('Send from controlle');
  }

  show() {}

  store() {}

  update() {}

  delete() {}
}

module.exports = new ContactController();
