document.addEventListener('DOMContentLoaded', () => {
        const experienceData = [
            {
                role: "Analista de Dados Jr",
                company: "Itaú Unibanco",
                period: "Junho de 2022 - Presente",
                details: [
                    "Participação ativa na estruturação de soluções de MLOps, incluindo ideação de um chatbot analítico com indicadores de seguros, integrando arquitetura de dados com aplicações de IA.",
                    "Atuação estratégica na modernização de pipelines legados (SAS) para ambiente cloud (AWS), utilizando Glue Data Move, AWS Glue Catalog, Athena e S3 como data lake central.",
                    "Condução de análises para definição de perfis de clientes e apoio à personalização de jornadas, conectando dados de diversas fontes e promovendo reuso de componentes via catálogos.",
                    "Fomento à cultura data-driven, com capacitação de times de negócio (BU PF e PJ), aproximando áreas técnicas e estratégicas para entrega de valor contínuo.",
                    "Desenvolvimento e automação de pipelines de dados para cenários batch, com foco em integração com sistemas de negócio (ex: CRM) e gatilhos para inadimplência.",
                    "Suporte a squads na construção de pipelines e fluxos orientados a OKRs, garantindo escalabilidade, performance e governança dos dados."
                ],
                tags: ["DataEngineering", "MLOps", "AWSGlue", "AmazonAthena", "AmazonS3", "ETL", "DataPipelines", "Python", "SQL", "Inovação", "DataDriven"]
            },
            {
                role: "Estagiário",
                company: "Itaú Unibanco",
                period: "Setembro de 2021 - Maio de 2022",
                details: ["Atuação no apoio às atividades da área de Dados e Analytics, com foco no desenvolvimento de habilidades em análise de dados, compreensão de processos de negócio e uso de ferramentas corporativas.",
                        "Participação em todo o ciclo analítico — desde a preparação e tratamento de dados até a entrega de análises com storytelling e visualizações claras. Execução de rotinas operacionais, identificação de oportunidades de melhoria e aprendizado contínuo em ambientes colaborativos e orientados a dados."],
                tags: ["Data Analytics", "Data Preparation", "Storytelling", "AprendizadoContínuo"]
            }
        ];

        const projectsData = [
            {
                title: "Chat Analítico com Indicadores de Performance",
                description: "(Projeto em desenvolvimento) Chatbot analítico para a comunidade de seguros, com o objetivo de viabilizar consultas a indicadores de performance por meio de integração em tempo real com o ecossistema de dados.",
                // image: "",
                // imageAlt: "Diagrama do fluxo de desenvolvimento do chatbot analítico, mostrando a integração com o Data Mesh e os componentes principais.",
                // diagramDescription: "Este diagrama conceitua o fluxo de desenvolvimento do chatbot analítico, destacando a integração com o Data Mesh e os principais componentes envolvidos. Ele ilustra como os dados são processados e apresentados ao usuário final através da interface do chatbot.",
                details: [
                    "O chatbot está sendo estruturado com arquitetura modular, facilitando a manutenção e evolução da solução e já foi integrada a consulta em tempo real ao Data Mesh, garantindo acesso dinâmico a dados críticos para o negócio.",
                    "Foi implementada a requisição de uma API de um Agent Generativo StackSpot, permitindo futuramente gerar respostas em linguagem natural a partir dos dados consultados.",
                    "Validação e Monitoramento com analise de interação do usuário, visando aprimorar continuamente a experiência e a precisão das respostas.",
                    "Atualmente o projeto esta em preparação para testes e validações finais antes de entrar em produção"
                ],
                technologies: ["Python", "AWS", "API Integration", "Arquitetura Modular", "IA Generativa", "Chatbot"],
                link: "#"
            },    
            {
            title: "Plataforma de Matching de Candidatos - Projeto MBA",
            description: "Solução completa de Machine Learning Engineering desenvolvida para o case da empresa Decision, unificando múltiplos modelos para previsão de match, com foco em arquitetura escalável e integração de ponta a ponta.",
            // image: "",
            // imageAlt: "Diagrama do pipeline de engenharia e modelos do projeto Decision.",
            // diagramDescription: "Este diagrama representa a arquitetura modular e escalável do projeto Decision, destacando os fluxos de ingestão, preparação de dados, inferência dos modelos e disponibilização via API com monitoramento.",
            details:  [
                "Desenhei e implementei uma arquitetura modular e escalável para orquestrar múltiplos componentes de machine learning, contemplando pipelines de pré-processamento, inferência e disponibilização via APIs.",
                "Desenvolvi um modelo supervisionado de classificação focado em previsão de match entre candidatos e vagas, aplicando técnicas de engenharia de atributos e validação cruzada com métricas orientadas ao negócio.",
                "Automatizei a ingestão e transformação de dados complexos em JSON, unificando múltiplas fontes (prospects, applicants e vagas) em uma estrutura flat robusta para consumo analítico e preditivo.",
                "Implementei endpoints REST com FastAPI e estrutura de versionamento via GitHub, organizando a trilha completa desde o protótipo até o deploy, com foco em reprodutibilidade e MLOps.",
                "Incluí estratégias de monitoramento e logging para rastreamento das inferências e criação de histórico para análise futura de performance dos modelos em produção.",
                "Projeto desenvolvido como entrega final do MBA em Machine Learning Engineering, consolidando habilidades em engenharia de dados, IA aplicada, arquitetura de soluções e documentação técnica orientada ao uso corporativo."
                ],
                technologies: ["Machine Learning", "MLOps", "Python", "FastAPI", "ETL", "JSON Parsing", "Data Engineering", "Feature Engineering", "API Development", "Batch Inference", "Data Pipeline", "GitHub", "Cloud Architecture", "Supervised Learning", "Model Deployment", "Model Monitoring"],
                link: "#"
            },
            {
                title: "Modernização de Bases Especializadas: Migração de SAS para AWS",
                description: "Projeto de modernização de processos de desenvolvimento de bases especializadas do ambiente legado SAS para a nuvem AWS, com foco em escalabilidade, governança e reuso no contexto do time de seguros.",
                // image: "",
                // imageAlt: "Diagrama da migração de processos SAS para o ambiente AWS.",
                // diagramDescription: "Este diagrama conceitua o processo de modernização e migração de fluxos analíticos e bases de dados do ambiente SAS legado para a infraestrutura escalável da AWS, no contexto do setor de seguros. Ele visualiza a transição de plataformas e a reestruturação dos dados na nuvem.",
                details: [
                    "Desenhei e implementei uma arquitetura modular e escalável para orquestrar múltiplos modelos de machine learning, contemplando pipelines de pré-processamento, inferência e disponibilização via APIs.",
                    "Modelei soluções integradas de classificação (para predição de match entre candidatos e vagas), NLP (para análise semântica de entrevistas) e clusterização (para segmentação de perfis), todas com foco em aplicabilidade de negócio.",
                    "Automatizei a ingestão e transformação de dados complexos em JSON, unificando múltiplas fontes (prospects, applicants e vagas) em uma estrutura flat robusta para consumo analítico e preditivo.",
                    "Implementei endpoints REST com FastAPI e estrutura de versionamento via GitHub, organizando a trilha completa desde o protótipo até o deploy, com foco em reprodutibilidade e MLOps.",
                    "Incluí estratégias de monitoramento e logging para rastreamento das inferências e criação de histórico para análise futura de performance dos modelos em produção.",
                    "Projeto desenvolvido como entrega final do MBA em Machine Learning Engineering, consolidando habilidades em engenharia de dados, IA aplicada, arquitetura de soluções e documentação técnica orientada ao uso corporativo."
                ],
                technologies: ["SAS", "AWS Athena", "AWS S3", "AWS StepFunctions", "AWS EventBridge", "Data Modernization", "Bases Especializadas"],
                link: "#"
            },
            {
            title: "SASI – Sistema Automático de Calendarização de Intervenções",
            description: "Projeto campeão da Batalha de Dados, desafio corporativo focado na resolução de problemas reais com dados. O SASI é uma solução inteligente de calendarização automatizada, baseada em modelagem matemática e machine learning, com o objetivo de otimizar a alocação de recursos e reduzir atrasos operacionais.",
            // image: "",
            // imageAlt: "Diagrama da lógica de alocação automática usada no SASI.",
            // diagramDescription: "Fluxo lógico de calendarização automatizada implementado no SASI, considerando critérios de urgência, capacidade de fornecedores e janelas de execução disponíveis.",
            details: [
                "Atuei como principal idealizador e responsável técnico da solução SASI, desenvolvida durante a Batalha de Dados, na qual minha equipe foi campeã entre os participantes do desafio corporativo.",
                "Construímos um sistema de calendarização automática de intervenções operacionais recorrentes, utilizando uma abordagem matemática para alocação inteligente baseada em restrições de recursos e prioridades de execução.",
                "Implementamos um modelo de machine learning com Amazon SageMaker para priorização das intervenções, alimentado por uma Feature Store construída especificamente para a solução.",
                "Participei ativamente da engenharia de dados do projeto, desde a etapa de ingestão e transformação (ETL) com SQL até a construção dos dados de entrada para o modelo de ML.",
                "O SASI permite simular cenários operacionais diversos, garantindo cobertura de 100% das demandas e melhorando o planejamento estratégico, reduzindo atrasos e otimizando o uso de fornecedores e equipes técnicas.",
                "A solução também se destacou pelo alinhamento entre dados e negócio, com entrega clara, aplicável e impactante — unindo storytelling, robustez técnica e foco em escalabilidade."
            ],
            technologies: [
            "AWS", "SageMaker", "SQL", "ETL", "Feature Store", 
            "Python", "Simulation", "Optimization", 
            "Machine Learning", "Data Storytelling"
            ]
            , 
            link: "#"
            },
            {
                title: "Agente Generativo para Documentação de Processos SAS e AWS",
                description: "Desenvolvi um agente generativo para documentar processos legados em SAS e fluxos modernizados em AWS (PySpark, Glue, Athena), automatizando a geração de documentação técnica em Markdown e integrando essa entrega ao repositório e visualização via GitHub Pages.",
                // image: "",
                // imageAlt: "Diagrama do fluxo de desenvolvimento do chatbot analítico, mostrando a integração com o Data Mesh e os componentes principais.",
                // diagramDescription: "Este diagrama conceitua o fluxo de desenvolvimento do chatbot analítico, destacando a integração com o Data Mesh e os principais componentes envolvidos. Ele ilustra como os dados são processados e apresentados ao usuário final através da interface do chatbot.",
                details: [
                    "O agente foi criado sobre a plataforma Stackspot, utilizando comandos rápidos (quick commands) para gerar documentação estruturada a partir do código dos pipelines.",
                    "O material gerado foi versionado no GitHub e disponibilizado em um ambiente público via GitHub Pages, facilitando o acesso técnico e promovendo governança e reuso.",
                    "capacitei o time para utilizá-lo de forma autônoma, padronizando a documentação de processos e promovendo a adoção da IA como ferramenta de apoio técnico.",
                    "Apoio direto no desenvolvimento do GitHub Pages e organização dos repositórios para facilitar o acesso e a navegação pela documentação gerada."
                ],
                technologies: ["StackSpot", "IA Generativa", "Markdown", "Github Pages", "IA Generativa"],
                link: "#"
            },
            {
                title: "Migração de Bases Legados(SAS) de Seguros para AWS",
                description: "Migração de bases de dados legadas do ambiente SAS para a arquitetura modernizada em nuvem AWS, no contexto da comunidade de seguros",
                // image: "",
                // imageAlt: "Diagrama conceitual do fluxo de migração de processos legados para AWS/Data Mesh, mostrando os componentes chave e o fluxo de dados.",
                // diagramDescription: "Este diagrama ilustra a arquitetura de alto nível do processo de migração, desde a origem dos dados no ambiente legado (SAS) até a sua transformação e alocação no Data Mesh da AWS. Ele destaca os serviços AWS utilizados para cada etapa, garantindo a visualização da transição e a modernização.",
                details: [
                    "Utilizei AWS Glue Data Move para realizar a transferência eficiente das bases e implementei a catalogação de dados com o AWS Glue Data Catalog, permitindo o consumo estruturado e governado pela comunidade de usuários.",
                    "Participei ativamente da discussão e seleção das melhores soluções AWS para cada etapa do pipeline, visando eficiência e custo-benefício.",
                    "Otimizei a ferramenta ja existente de migração de bases SAS para AWS, garantindo a integridade e a qualidade e eficiencia dos dados durante o processo de migração",
                    "Essa entrega marcou o início das discussões e da implementação da modernização de processos de dados na AWS, promovendo maior escalabilidade, reusabilidade e integração com o ecossistema cloud e princípios de Data Mesh."
                ],
                highlights: [
                    "+30 Tabelas Criadas",
                    "11 TB de Armazenamento",
                    "+100 Glue Jobs",
                    "60 Orquestradores de Processos",
                    "Reuso de +20 Jobs de Reprocessamento",
                ],
                technologies: ["DataEngineering", "PySpark", "SQL", "AWS Glue", "AWS Athena", "Data Catalog", "DataPipelines", "Data Mesh", "SAS Migration"],
                link: "#"
            },
            {
                title: "Capacitação e Treinamento em Dados de Analytics",
                description: "Desenvolvi e conduzi treinamentos técnicos voltados à formação e nivelamento de profissionais em conceitos fundamentais e aplicados de Dados e Analytics, com foco em ambientes cloud (AWS) e ferramentas de análise.",
                // image: "",
                // imageAlt: "Diagrama de um programa de ensino e treinamento em Dados de Analytics.",
                // diagramDescription: "Este diagrama representa a estrutura de um programa de ensino e treinamento em Dados de Analytics, detalhando os módulos teóricos (ambientes, processamento, arquiteturas de dados) e as aplicações práticas com ferramentas como PySpark, SQL e AWS, visando a capacitação e equalização do conhecimento da equipe.",
                details: [
                    "Estruturei aulas teóricas e práticas abordando arquitetura de dados, processamento em nuvem, fundamentos de pipelines e uso de ferramentas como Pandas, SQL, AWS e PySpark.",
                    "Atuei como mentor técnico, conduzindo sessões ao vivo, resolvendo desafios com os participantes e promovendo o uso estratégico de dados em contextos reais do negócio.",
                    "Atuei como mentor e facilitador, acelerando o desenvolvimento profissional em Dados de Analytics através de exemplos práticos e resolução de desafios.",
                    "Mentoria técnica contínua para estagiários, com foco no desenvolvimento técnico, autonomia e entregas de impacto",
                    "Foco em cases reais e aplicação prática de conceitos, com o objetivo de capacitar a equipe para enfrentar desafios do dia a dia."
                ],
                technologies: ["AWS", "Pandas", "SQL", "Data Processing", "Analytics Training", "Mentorship", "Mentoria"],
                link: "#"
            }
        ];

        const technologyStackData = [
                { label: 'AWS', color: '232F3E', logo: 'amazonaws', logoColor: 'FF9900' },
                { label: 'Python', color: '3776AB', logo: 'python', logoColor: 'FFD43B' },
                { label: 'SQL', color: '336791', logo: 'postgresql', logoColor: 'FFFFFF' },
                { label: 'PySpark', color: 'E25A1C', logo: 'apachespark', logoColor: 'FFFFFF' },
                { label: 'ETL', color: '017CEE', logo: 'apacheairflow', logoColor: 'FFFFFF' },
                { label: 'Data Mesh', color: 'FF6F61', logo: 'databricks', logoColor: 'FFFFFF' },
                { label: 'Quicksight', color: '1D3F59', logo: 'amazonquicksight', logoColor: '00BFFF' },
                { label: 'Git', color: 'F05032', logo: 'git', logoColor: 'FFFFFF' },
                { label: 'Docker', color: '2496ED', logo: 'docker', logoColor: 'FFFFFF' },
                { label: 'ML', color: 'FF6F00', logo: 'tensorflow', logoColor: 'FFFFFF' },
                { label: 'Glue', color: '5A35A0', logo: 'awsglue', logoColor: 'FFFFFF' },
                { label: 'Athena', color: '1F6FEB', logo: 'amazonathena', logoColor: 'FFFFFF' },
                { label: 'Git Pages', color: '181717', logo: 'github', logoColor: 'FFFFFF' },
                { label: 'Markdown', color: '000000', logo: 'markdown', logoColor: 'FFFFFF' },
                { label: 'Stackspot', color: '2D2A7B', logo: 'devdotto', logoColor: 'FFFFFF' },
                { label: 'MLOps', color: '00ACC1', logo: 'mlflow', logoColor: 'FFFFFF' },
                { label: 'FastAPI', color: '009688', logo: 'fastapi', logoColor: 'FFFFFF' },
                { label: 'Pandas', color: '150458', logo: 'pandas', logoColor: 'FFFFFF' },
                { label: 'VS Code', color: '007ACC', logo: 'visualstudiocode', logoColor: 'FFFFFF' }
                ];

const perceptionsData = [
{
"title": "Referência técnica e colaborativa em dados",
"text": "É referência em conhecimento em dados na gerência de experiência PF. Participou da frente de capacitação e até hoje é lembrado pela grande performance que teve, além de sempre estar disposto a ajudar pares e parceiros. Mostrou conhecimento técnico capaz de resolver problemas de alta complexidade. Tenho certeza que irá alcançar o PDI o mais rápido possível."
},
{
"title": "Alta intensidade no uso de dados e espírito de equipe",
"text": "O Jhon usa os dados intensamente para solucionar problemas e é o verdadeiro vai de turma!"
},
{
"title": "Capacidade técnica sólida e contribuição em comunidade",
"text": "Possui grande capacidade técnica para desempenhar suas funções. Além disso sempre agrega aos demais companheiros com seus conteúdos sobre dados."
},
{
"title": "Domínio técnico e comunicação inspiradora",
"text": "Jhonata é um profissional incrível e extremamente qualificado, destacando-se por sua inteligência e habilidade impressionante com dados. Ele possui um profundo conhecimento em AWS, Python e diversos outros processos, sempre demonstrando paciência e atenção ao explicar conceitos complexos. Sua capacidade de comunicação não apenas facilita o entendimento, mas também inspira confiança e motivação."
},
{
"title": "Potencial para liderar e expandir impacto",
"text": "Possui bastante conhecimento técnico e busca aprender cada vez mais. Tem ambição em diminuir trabalho manual e pode performar bem em estudos complexos se houver oportunidade. Acredito que a liderança possa aumentar o nível de exposição à comunidade a fim de desenvolver mais a interação com diferentes times e assim torná-lo um profissional cada vez mais completo."
},
{
"title": "Espírito colaborativo e impacto técnico positivo",
"text": "Jhonata tem se destacado por sua excelente capacidade técnica, trazendo um impacto extremamente positivo no apoio ao time. Ele está sempre pronto para oferecer ajuda quando solicitado, mostrando um espírito de equipe exemplar e uma disposição admirável para colaborar. Sua atitude proativa e colaborativa é verdadeiramente inspiradora para todos ao seu redor!"
},
{
"title": "Protagonismo em projetos e referência na equipe",
"text": "Jhonata se destacou muito este ano, desenvolvendo diversos projetos grandes e complexos como as capacitações, o estudo de personas entre outros, além disso, venceu a batalha de dados com uma participação importantíssima no desenvolvimento da solução. Tem tomado cada vez mais a frente em agendas importantes e sido ponto focal para as tomadas de decisão da equipe quanto à novas tecnologias."
}
]
;

    const renderListItems = items => items.map(item => `<li>${item}</li>`).join('');
    const renderTags = tags => tags.map(tag => `<span class="inline-block bg-cyan-100 text-cyan-900 text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-md">${tag}</span>`).join('');

    const experienceContainer = document.getElementById('experience-container');
    experienceData.forEach(({ role, company, period, details, tags }) => {
        const div = document.createElement('div');
        div.className = 'relative mb-10 pl-6 border-l-4 border-cyan-700';
        div.innerHTML = `
            <div class="cursor-pointer job-title transition hover:bg-cyan-50 p-3 rounded-md">
                <h3 class="text-lg font-bold text-cyan-900">${role}</h3>
                <p class="text-md text-cyan-800 font-semibold">${company}</p>
                <p class="text-sm text-cyan-700">${period}</p>
            </div>
            <div class="details-content pl-4 mt-2">
                <ul class="list-disc list-inside text-zinc-800 space-y-1">
                    ${renderListItems(details)}
                </ul>
                <div class="mt-3 flex flex-wrap">${renderTags(tags)}</div>
            </div>`;
        experienceContainer.appendChild(div);
    });

    document.querySelectorAll('.job-title').forEach(title => {
        title.addEventListener('click', () => {
            title.nextElementSibling.classList.toggle('open');
        });
    });

    const projectsContainer = document.getElementById('projects-container');
    projectsData.forEach(({ title, description, details, technologies, highlights, link }) => {
    const div = document.createElement('div');
    div.className = 'bg-white p-6 rounded-lg shadow-md';

    const highlightHtml = highlights ? `
        <div class="mt-4 p-4 bg-cyan-50 rounded-md">
        <h4 class="font-semibold text-cyan-800 mb-2">Destaques:</h4>
        <ul class="list-disc list-inside text-cyan-800 text-sm">
            ${renderListItems(highlights)}
        </ul>
        </div>` : '';

    div.innerHTML = `
        <div class="cursor-pointer project-title transition hover:bg-cyan-100 p-2 -m-2 rounded-md">
        <h3 class="text-xl font-semibold text-cyan-800">${title}</h3>
        <p class="text-sm text-zinc-700 mt-1">${description}</p>
        </div>
        <div class="details-content mt-4 pl-2">
        <ul class="list-disc list-inside text-zinc-800 space-y-2">
            ${renderListItems(details)}
        </ul>
        ${highlightHtml}
        <div class="mt-4 flex flex-wrap">${renderTags(technologies)}</div>
        ${link && link !== '#' ? `<a href="${link}" target="_blank" class="text-cyan-700 hover:text-cyan-900 mt-4 inline-block">Ver Projeto</a>` : ''}
        </div>`;

    projectsContainer.appendChild(div);
    });

    document.querySelectorAll('.project-title').forEach(title => {
    title.addEventListener('click', () => {
        title.nextElementSibling.classList.toggle('open');
    });
    });

    const techStackContainer = document.getElementById('tech-stack-container');
    technologyStackData.forEach(({ label, color, logo, logoColor }) => {
    const badgeUrl = `https://img.shields.io/badge/${encodeURIComponent(label)}-${color}?style=for-the-badge&logo=${logo}&logoColor=${logoColor}`;
    const div = document.createElement('div');
    div.className = 'tech-logo-card';
    div.innerHTML = `<img src="${badgeUrl}" alt="${label} Badge">`;
    techStackContainer.appendChild(div);
    });

    const perceptionsGrid = document.querySelector('#perceptions .perceptions-grid');
    perceptionsData.forEach(({ title, text }) => {
    const div = document.createElement('div');
    div.className = 'bg-cyan-100 p-4 rounded-md shadow-sm';
    div.innerHTML = `
        <h3 class="text-cyan-900 font-semibold mb-2">${title}</h3>
        <p class="text-zinc-800">&ldquo;${text}&rdquo;</p>`;
    perceptionsGrid.appendChild(div);
    });
});
