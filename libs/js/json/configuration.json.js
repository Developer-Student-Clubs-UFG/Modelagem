Bizagi.AppModel = {"personalized":false,"userLogoName":"\\libs\\img\\biz-ex-logo.png","bizagiUrl":"http://www.bizagi.com","productName":"Bizagi Modeler","modelName":"Fluxograma - Processo de Organização de Eventos - GDSC UFG","publishDate":"05/05/2022 11:38:29","pages":[{"id":"a18e822c-980b-4733-bf18-c129ccd2122c","name":"FLUXOGRAMA DO PROCESSO DE ORGANIZAÇÃO DE EVENTOS","description":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Fluxograma referente ao processo de cria&ccedil;&atilde;o eventos no GDSC UFG</span></p>","mainProcessId":"3a2d51bf-4434-4797-b773-228e4b754161","version":"V1.2.0 - (03/05/2020)","author":"Google Developer Student Club UFG ","image":"files\\diagrams\\FLUXOGRAMA_DO_PROCESSO_DE_ORGANIZACAO_DE_EVENTOS.png","isSubprocessPage":false,"properties":[{"id":"299c509c-6c8f-4372-8b08-22bd9b4b3b29","name":"Créditos","value":"<p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:bold;font-style:normal;\">Fluxograma de organiza&ccedil;&atilde;o de eventos </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:bold;font-style:normal;\">&nbsp;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:bold;font-style:normal;\">Coordenadores</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">Gerente de Comunidade (Brasill: Amanda Mazini</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">L&iacute;der Regional (Brasil): Rodrigo Akira </span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:bold;font-style:normal;\">Modelagem do fluxograma </span><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\"><br/>Lead DSC UFG 21-22: Wendel Marques de Jesus Souza<br/>Coordenadora/ membra: Joyce Beatriz Ferreira da Costa Silva</span></p><p style=\"text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt;\"><span style=\"color:#000000;background-color:transparent;font-family:Segoe UI;font-size:8pt;font-weight:normal;font-style:normal;\">&nbsp;</span></p>","type":"text"}],"elements":[{"id":"3a2d51bf-4434-4797-b773-228e4b754161","name":"Pools","description":"","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":-110.0,"y":30.0}],"radius":0.0,"height":0.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"817bc4ca-ffaa-4745-b063-ad1da32bb218","name":"","elementImage":"files\\bpmnElements\\817bc4ca-ffaa-4745-b063-ad1da32bb218.png","imageBounds":{"points":[{"x":567.0,"y":29.0}],"radius":0.0,"height":83.0,"width":500.0,"shape":"rect"},"elementType":"ImageArtifact"}]},{"id":"63637863-3aeb-4244-8df0-c6cd756336bf","name":"Organização de Eventos","elementImage":"files\\bpmnElements\\Participant.png","imageBounds":{"points":[{"x":20.0,"y":240.0}],"radius":0.0,"height":1335.0,"width":50.0,"shape":"rect"},"elementType":"Participant","properties":[],"pageElements":[{"id":"47df1e19-601d-4ef3-90b1-ff47ab14fcf0","name":"Início ","elementImage":"files\\bpmnElements\\NoneStart.png","imageBounds":{"points":[{"x":120.0,"y":371.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneStart"},{"id":"1e81309f-aa74-4dc2-bc64-4a7715f7cd66","name":"Palestrante confirmou?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1370.0,"y":465.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Não","elementType":"SequenceFlow","properties":[]},{"name":"Portão","elementType":"SequenceFlow","properties":[]}]},{"id":"3a34ce15-f2b8-4ef5-a41f-cd822f493618","name":"Criar artes de divulgação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1720.0,"y":833.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"72ef1980-003a-4123-aabb-c78db7c5a618","name":"Gerar contéudo ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1860.0,"y":830.0}],"radius":0.0,"height":67.0,"width":124.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"d2af781b-8e4f-45ee-91cc-b02b6366bad0","name":"Fazer a divulgação nas redes sociais ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2020.0,"y":820.0}],"radius":0.0,"height":87.0,"width":104.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"84940166-02a5-43b1-a0c8-54ff68b21c77","name":"DIa do evento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1625.0,"y":1360.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"218f1a85-8564-4cc2-838a-c2329342e110","name":"Testar com o palestrante: apresentação (se houver slide) e som.\u2028","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1769.33337,"y":1354.5}],"radius":0.0,"height":71.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c8029953-aebd-4dc1-900e-375bc9f9cdca","name":"Abertura do evento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2200.0,"y":1320.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"924a9cce-34ed-4072-aa1b-41fb433a086e","name":"Finalizar evento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2380.0,"y":1320.0}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"415551f6-a8f5-4c26-bdcf-3e80b6ecb0d7","name":"Escolher palestrante","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1120.0,"y":359.0}],"radius":0.0,"height":55.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"bafd64de-f54f-4bec-9e07-d5a30dd64f11","name":"Definir temática e possíveis datas","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":360.0,"y":354.0}],"radius":0.0,"height":65.0,"width":88.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4c6b3754-e87e-4f2c-8338-1fa1d308fafa","name":"Analisar respostas \u2028do formulário \"Declaração de participação\" de eventos anteriores e formulário de \"Palestre no GDSC UFG\"","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":180.0,"y":340.0}],"radius":0.0,"height":93.0,"width":142.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"4eff2117-6ea3-4d76-b465-3bd18b9b0b28","name":"Editar formulário \"Declaração de Participação\" ou fazer formulário para emissão de certificado","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1480.0,"y":660.0}],"radius":0.0,"height":80.0,"width":124.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"a938959f-fd64-4fbc-ad83-974b25f81ffc","name":"Entrar em contato com a pessoa palestrante (informar data, horário e assunto)  ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1333.0,"y":346.0}],"radius":0.0,"height":81.0,"width":114.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"58011b2b-63d2-4039-a728-7692becf0f65","name":"Definir se será pelo canal do INF ou transmissão própria ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":860.0,"y":500.0}],"radius":0.0,"height":73.0,"width":125.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"21ccdcb6-0272-46d1-acbc-b7c113a00b72","name":"Definir se o evento será online ou presencial","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":500.0,"y":351.0}],"radius":0.0,"height":71.0,"width":97.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"46405d63-0796-463f-a940-5814d427ab43","name":"Agendar sala/auditório","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":880.0,"y":356.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"6f59f099-8288-4a2c-a72a-13d2b930b317","name":"Enviar informações sobre a transmissão ou o local presencial, solicitar mini bio e uma foto para a arte","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1480.0,"y":520.0}],"radius":0.0,"height":98.0,"width":137.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"169f1e46-ff3d-496f-89b7-e687b40bc126","name":"Pré-evento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1345.0,"y":833.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c5bd312d-2ffa-437b-976f-a7a53c93a122","name":"Adicionar informações no GDSC Community","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1480.0,"y":833.5}],"radius":0.0,"height":60.0,"width":117.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8d897176-1707-469b-b893-ecc185b1deb0","name":"Event","elementImage":"files\\bpmnElements\\ParallelMultipleIntermediate.png","imageBounds":{"points":[{"x":1654.5,"y":848.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"ParallelMultipleIntermediate"},{"id":"52b370c1-5780-4036-a98a-9ae37d5d3410","name":"Confirmar com palestrante se está \"tudo okay\" para a palestra e solicitar autorização de imagem para gravação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1600.0,"y":920.0}],"radius":0.0,"height":122.0,"width":139.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"5ff35ba7-e36f-42e5-9052-3108910df475","name":"Definir quem irá realizar a mediação do evento","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1611.0,"y":1080.0}],"radius":0.0,"height":66.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"89fea6ce-3293-435b-849f-7ae4b9c4d047","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1650.0,"y":1260.0}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"DIa do evento","elementType":"SequenceFlow","properties":[]}]},{"id":"b8457e35-4107-4005-994e-23d85d41c19b","name":"Recepcionar e auxiliar  participantes ","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":1940.66675,"y":1351.5}],"radius":0.0,"height":77.0,"width":105.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"046d0109-ed4a-40a2-a883-e3212c46d4b6","name":"Event","elementImage":"files\\bpmnElements\\ParallelMultipleIntermediate.png","imageBounds":{"points":[{"x":2100.0,"y":1375.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"ParallelMultipleIntermediate"},{"id":"20e77287-c8e8-4d3c-a121-3cc9188b440e","name":"Gravar evento e produzir medias (fotos, vídeos, prints etc)","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2200.0,"y":1420.0}],"radius":0.0,"height":68.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"9e2ae936-06d1-457c-b572-79ed3616c806","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":2600.0,"y":1379.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Fechar o evento no GDSC Community","elementType":"SequenceFlow","properties":[]}]},{"id":"977ea307-b61e-42f4-9ae7-c24f7583915d","name":"Fechar o evento no GDSC Community","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2680.0,"y":1363.5}],"radius":0.0,"height":72.0,"width":100.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"465b5f33-4921-44ff-8e08-d8c1798df62e","name":"Gerar lista de participantes","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2820.0,"y":1366.5}],"radius":0.0,"height":66.0,"width":107.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"0e9800a7-3fe8-44ce-ad63-b101298927f2","name":"Confeccionar certificados (se cabível) e/ou declarações de participação","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2967.0,"y":1360.0}],"radius":0.0,"height":79.0,"width":133.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"b1d8159d-0005-4922-82f7-08068b007ca0","name":"Enviar formulário de \"Declaração de Participação\" periodicamente","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":2380.0,"y":1420.0}],"radius":0.0,"height":69.0,"width":101.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"8b1e8711-cfee-4f82-9500-7b924d607190","name":"Registar eventos na planilha","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":640.0,"y":356.5}],"radius":0.0,"height":60.0,"width":90.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"50fadbe8-8615-431b-837b-29fa80b49442","name":"É online?","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":760.0,"y":366.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Sim","elementType":"SequenceFlow","properties":[]},{"name":"não","elementType":"SequenceFlow","properties":[]}]},{"id":"84b7a6e5-8db5-4190-8dd3-00b094716081","name":"Evento encerrado","elementImage":"files\\bpmnElements\\NoneEnd.png","imageBounds":{"points":[{"x":3300.0,"y":1384.5}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"NoneEnd"},{"id":"807d06bb-0dfc-4076-8773-bcdb30be0379","name":"Gateway","elementImage":"files\\bpmnElements\\ExclusiveGateway.png","imageBounds":{"points":[{"x":1040.0,"y":366.5}],"radius":0.0,"height":40.0,"width":40.0,"shape":"poly"},"elementType":"ExclusiveGateway","properties":[],"pageElements":[{"name":"Escolher palestrante","elementType":"SequenceFlow","properties":[]}]},{"id":"c948556f-343b-4bba-8450-3244072eb73e","name":"Event","elementImage":"files\\bpmnElements\\ParallelMultipleIntermediate.png","imageBounds":{"points":[{"x":1375.0,"y":620.0}],"radius":15.0,"height":30.0,"width":30.0,"shape":"circle"},"elementType":"ParallelMultipleIntermediate"},{"id":"f056d9ef-e804-4aa4-80cc-996dbf0a7e70","name":"Adicionar demais informações na planilha","elementImage":"files\\bpmnElements\\AbstractTask.png","imageBounds":{"points":[{"x":3140.0,"y":1366.5}],"radius":0.0,"height":66.0,"width":118.0,"shape":"rect"},"elementType":"AbstractTask","properties":[]},{"id":"c2959464-d677-49df-a8b4-abf7dfd8b450","name":"Organização inicial","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":240.0}],"radius":0.0,"height":515.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"e1af7d50-044c-46cb-b8a3-2e258e782535","name":"Pré-evento","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":755.0}],"radius":0.0,"height":457.0,"width":30.0,"shape":"rect"},"elementType":"Lane"},{"id":"52b07a4e-0b62-4ce0-aa86-2274d84c365d","name":"Durante e pós-evento","elementImage":"files\\bpmnElements\\Lane.png","imageBounds":{"points":[{"x":70.0,"y":1212.0}],"radius":0.0,"height":363.0,"width":30.0,"shape":"rect"},"elementType":"Lane"}]}]}],"texts":{"tableOfContents":"Índice","pageNumber":"Página","pageNumberLabelOf":"de","version":"Versão","author":"Autor","description":"Descrição","mainPool":"Processo principal","mainPoolDescription":"Processo principal Descrição","processDiagrams":"Processar os Diagramas","processElements":"Elementos do processo","elements":"Elementos do processo","defaultElementName":"Elemento","performers":"Executantes","connectors":"Conectores","connector":"Conector","home":"Principal","search":"Pesquisar","goToParentProcess":"<< Ir para Matriz","visitBizagi":"Visite bizagi.com","contains":"Contém {0} subprocessos","showAll":"Show all","fullScreen":"Tela inteira","zoomIn":"Ampliar","zoomOut":"Reduzir","close":"Fechar","menu":"Menu: ","errorPage":"Erro ao visualizar a página","process":"Proceso","subProcess":"Subprocessos publicados","contain":"Contém","checkAttributes":"Ver atributos","checkOverview":"Ver resumo","unavailableResource":"O recurso não está disponível","localResource":"O recurso pode ser acessado localmente","performer":"Executor","linktoimage":"Link para a  imagem","presentationAction":"Ações de apresentação","searchGlobal":"Busca todos","searchLocal":"Busca neste processo","searchResults":"Nenhum resultado encontrado","titlePage":"Start","emptyElement":"Este elemento ainda não foi documentado","unsupported":"Seu navegador não suporta conteúdo exibido por esta página. <br> Recomendamos que você atualizar o seu navegador.","details":"Detalhes","expand":"Expandir","mainPoolProperties":"Propriedades do Processo principal","cannotVisualize":"The page cannot be displayed","resourceNotFound":"The requested resource was not found:","applyTheme":"Applying new theme"},"searchMap":[{"containerId":"a18e822c-980b-4733-bf18-c129ccd2122c","containerName":"FLUXOGRAMA DO PROCESSO DE ORGANIZAÇÃO DE EVENTOS","isSubprocess":false,"elements":[{"id":"817bc4ca-ffaa-4745-b063-ad1da32bb218"},{"id":"806c10ba-ada0-41f9-a176-27f877548cc6"},{"id":"63637863-3aeb-4244-8df0-c6cd756336bf","value":"Organização de Eventos"},{"id":"c2959464-d677-49df-a8b4-abf7dfd8b450","value":"Organização inicial"},{"id":"e1af7d50-044c-46cb-b8a3-2e258e782535","value":"Pré-evento"},{"id":"52b07a4e-0b62-4ce0-aa86-2274d84c365d","value":"Durante e pós-evento"},{"id":"47df1e19-601d-4ef3-90b1-ff47ab14fcf0","value":"Início "},{"id":"1e81309f-aa74-4dc2-bc64-4a7715f7cd66","value":"Palestrante confirmou?"},{"id":"3a34ce15-f2b8-4ef5-a41f-cd822f493618","value":"Criar artes de divulgação"},{"id":"72ef1980-003a-4123-aabb-c78db7c5a618","value":"Gerar contéudo "},{"id":"d2af781b-8e4f-45ee-91cc-b02b6366bad0","value":"Fazer a divulgação nas redes sociais "},{"id":"84940166-02a5-43b1-a0c8-54ff68b21c77","value":"DIa do evento"},{"id":"218f1a85-8564-4cc2-838a-c2329342e110","value":"Testar com o palestrante: apresentação (se houver slide) e som.\u2028"},{"id":"c8029953-aebd-4dc1-900e-375bc9f9cdca","value":"Abertura do evento"},{"id":"924a9cce-34ed-4072-aa1b-41fb433a086e","value":"Finalizar evento"},{"id":"415551f6-a8f5-4c26-bdcf-3e80b6ecb0d7","value":"Escolher palestrante"},{"id":"bafd64de-f54f-4bec-9e07-d5a30dd64f11","value":"Definir temática e possíveis datas"},{"id":"4c6b3754-e87e-4f2c-8338-1fa1d308fafa","value":"Analisar respostas \u2028do formulário \"Declaração de participação\" de eventos anteriores e formulário de \"Palestre no GDSC UFG\""},{"id":"4eff2117-6ea3-4d76-b465-3bd18b9b0b28","value":"Editar formulário \"Declaração de Participação\" ou fazer formulário para emissão de certificado"},{"id":"a938959f-fd64-4fbc-ad83-974b25f81ffc","value":"Entrar em contato com a pessoa palestrante (informar data, horário e assunto)  "},{"id":"58011b2b-63d2-4039-a728-7692becf0f65","value":"Definir se será pelo canal do INF ou transmissão própria "},{"id":"21ccdcb6-0272-46d1-acbc-b7c113a00b72","value":"Definir se o evento será online ou presencial"},{"id":"46405d63-0796-463f-a940-5814d427ab43","value":"Agendar sala/auditório"},{"id":"6f59f099-8288-4a2c-a72a-13d2b930b317","value":"Enviar informações sobre a transmissão ou o local presencial, solicitar mini bio e uma foto para a arte"},{"id":"169f1e46-ff3d-496f-89b7-e687b40bc126","value":"Pré-evento"},{"id":"c5bd312d-2ffa-437b-976f-a7a53c93a122","value":"Adicionar informações no GDSC Community"},{"id":"8d897176-1707-469b-b893-ecc185b1deb0","value":""},{"id":"52b370c1-5780-4036-a98a-9ae37d5d3410","value":"Confirmar com palestrante se está \"tudo okay\" para a palestra e solicitar autorização de imagem para gravação"},{"id":"5ff35ba7-e36f-42e5-9052-3108910df475","value":"Definir quem irá realizar a mediação do evento"},{"id":"89fea6ce-3293-435b-849f-7ae4b9c4d047","value":""},{"id":"b8457e35-4107-4005-994e-23d85d41c19b","value":"Recepcionar e auxiliar  participantes "},{"id":"046d0109-ed4a-40a2-a883-e3212c46d4b6","value":""},{"id":"20e77287-c8e8-4d3c-a121-3cc9188b440e","value":"Gravar evento e produzir medias (fotos, vídeos, prints etc)"},{"id":"9e2ae936-06d1-457c-b572-79ed3616c806","value":""},{"id":"977ea307-b61e-42f4-9ae7-c24f7583915d","value":"Fechar o evento no GDSC Community"},{"id":"465b5f33-4921-44ff-8e08-d8c1798df62e","value":"Gerar lista de participantes"},{"id":"0e9800a7-3fe8-44ce-ad63-b101298927f2","value":"Confeccionar certificados (se cabível) e/ou declarações de participação"},{"id":"b1d8159d-0005-4922-82f7-08068b007ca0","value":"Enviar formulário de \"Declaração de Participação\" periodicamente"},{"id":"8b1e8711-cfee-4f82-9500-7b924d607190","value":"Registar eventos na planilha"},{"id":"50fadbe8-8615-431b-837b-29fa80b49442","value":"É online?"},{"id":"84b7a6e5-8db5-4190-8dd3-00b094716081","value":"Evento encerrado"},{"id":"807d06bb-0dfc-4076-8773-bcdb30be0379","value":""},{"id":"c948556f-343b-4bba-8450-3244072eb73e","value":""},{"id":"f056d9ef-e804-4aa4-80cc-996dbf0a7e70","value":"Adicionar demais informações na planilha"}]}]}