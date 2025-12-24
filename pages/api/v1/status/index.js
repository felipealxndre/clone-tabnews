function status(request, response) {
  response.status(200).json({ message: "Tudo ótimo com o Nexed!" });
}

export default status;
