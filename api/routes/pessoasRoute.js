const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController");

const router = Router();

router.get("/pessoas", PessoaController.listarPessoas);
router.get("/pessoas/:id", PessoaController.buscarPorId);
router.post("/pessoas", PessoaController.inserirPessoa);

module.exports = router;
