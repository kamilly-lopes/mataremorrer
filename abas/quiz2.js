var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var alternativa = [
 {
	 alternative: "Quantas pessoas foram mortas segundo Pedrinho Matador?",
	 a: "42",
	 b: "100",
	 c: "78",
	 answer: "b"
   },
 {
     alternative: "Que época houve o renascimento?"
     a: "Entre meados do século XIX e o fim do século XX",
     b: "Entre meados do século XIV e o fim do século XVI",
     c: "Entre meados do século XX e o fim do século XXI",
     answer: "B"	 
   },
 {
     alternativa: "Onde foi considerado o berço do renascimento?"
     a: "França nas cidades de Paris, Marselha e Estrasburgo",
     b: "Inglaterra nas cidades de Londres,Manchester e Liverpool",
     c: ": Itália nas cidades de Gênova, Florença e Veneza"
	 answer: "C"
   },	
 {
     alternativa: "Quais destas são características renascentistas?"
     a: "Racionalismo, antropocentrismo, individualismo",
     b: "Racionalismo, teocentrismo, individualismo",
     c: "Empirismo, antropocentrismo, individualismo",
     answer: "A"
   },
 {
     alternativa: "Qual a definição de mecenas?"
     a: "Centros de atividades artísticas da Europa Medieval",
     b: " Homens afortunados que patrocinavam os artistas e suas atividades culturais",
     c: "Cantigas onde o eu lírico é sempre uma voz masculina",
     answer: "B"
    },	 
 {
	  alternativa: "Qual das opções abaixo têm três artistas do renascimento?",
      a: "Leonardo da Vinci, Donatello, Claude Monet",
      b: "Sandro Botticelli, Vincent Van Gogh, Caravaggio",
      c: "Michelangelo, Leonardo da Vinci, Rafael",
      answer: "C"
    },
  {
	  alternativa: "Levando em consideração que Leonardo da Vinci foi um artista muito polêmico. <br></br> Qual desses motivos fez com que a obra A Última Ceia tenha sido muito polêmico e ter sofrido censura da igreja?",
      a: "A representação de Jesus e Maria Madalena estarem supostamente casado",
      b: "O seu tamanho extremamente grande",
      c: "A paleta de cores utilizada para pintar o cenário",
      answer: "A"
    },
  {
	 alternativa: "Qual movimento artístico sucede o classicismo?"
	 a: "Arte gótica",
	 b:"Neoclassicimo",
	 c: "Arte barroca",
	 answer: "C"
    },
  {
     alternativa: "Leonardo da Vinci foi um homem com muitos conhecimentos, qual das opções abaixo foram profissões que ele NÃO exerceu?",
     a: "Matemático",
     b: "Botãnico",
     c: "Costureiro",
     answer: "C"	 
  {	
     alternativa: "O Nascimento de Vênus é uma obra renascentista de qual artista?",
	 a: "Leonardo da Vinci",
	 b: "Sandro Botticelli",
	 c: "Donatello",
	 answer: "B"
	
];  

	function get(x) {
	return document.getElementById(x);
}

function renderQuestion(){
  test = get("test");
  if(pos >= alternativa.length){
  test.innerHTML = "<h2>You got "+correct+" of "+alternativa.length+" alternativa correta </h2>"; 
  get ("test_status").innerHTML = "Test completed";


pos = 0;
correct = 0;

return false;  