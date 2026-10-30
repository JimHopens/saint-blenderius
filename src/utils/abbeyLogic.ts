/**
 * Pure logic and calculations for the Abbey of Saint Blenderius treatise application.
 */

export interface QuizQuestion {
  id: number;
  question: string;
  subtext: string;
  options: {
    text: string;
    score: number;
    latinRemark: string;
  }[];
}

export interface DiagnosisResult {
  score: number;
  stageName: string;
  latinDiagnosis: string;
  description: string;
  recommendedPenance: string;
  tanninLevel: string;
  riskOfVacuumBlenderus: 'Низкий' | 'Умеренный' | 'Критический' | 'Неизлечимый';
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: 'Какое чувство охватывает вас при взгляде на перезрелую, лопнувшую хурму с медовой мякотью?',
    subtext: 'Первый признак поражения рецепторов дикими танинами',
    options: [
      {
        text: 'Обычный фрукт, съем ложкой без лишних мыслей.',
        score: 5,
        latinRemark: 'Innocentia rustica (Сельская наивность)',
      },
      {
        text: 'Любопытство: плоть кажется подозрительно нежной и теплой.',
        score: 15,
        latinRemark: 'Curiositas carnalis (Плотское любопытство)',
      },
      {
        text: 'Дрожь в пальцах: непреодолимый позыв растереть её в пюре и слизать со ступки.',
        score: 25,
        latinRemark: 'Fructus tentatio (Плодовое искушение)',
      },
    ],
  },
  {
    id: 2,
    question: 'Что слышится вам в глухом гуле работающего измельчителя или скрежете пестика?',
    subtext: 'Аудиальная деформация монахов-фрутарианцев',
    options: [
      {
        text: 'Просто шум кухонной утвари.',
        score: 5,
        latinRemark: 'Sonus machinae simplex',
      },
      {
        text: 'Сдавленный стон перетираемых волокон и ягодных соков.',
        score: 15,
        latinRemark: 'Suspirium baccarum (Вздох ягод)',
      },
      {
        text: 'Песнь дионисийской страсти и призыв к неистовому соитию.',
        score: 25,
        latinRemark: 'Clamor libidinis diabolicae',
      },
    ],
  },
  {
    id: 3,
    question: 'Как долго вы способны провести утро без густого смузи?',
    subtext: 'Диагностика порога наступления Vacuum Blenderus',
    options: [
      {
        text: 'Спокойно обхожусь травяным отваром или сухой горбушкой.',
        score: 5,
        latinRemark: 'Patientia monastica (Монашеское терпение)',
      },
      {
        text: 'К полудню взгляд туманится, руки ищут чашу.',
        score: 15,
        latinRemark: 'Initium vacui (Начало пустоты)',
      },
      {
        text: 'Уже через час начинается бред: обычные предметы кажутся бедрами доярок.',
        score: 25,
        latinRemark: 'Vacuum Blenderus acutus (Острый ужас чаши)',
      },
    ],
  },
  {
    id: 4,
    question: 'Какова ваша реакция на вяжущий эффект недозрелой хурмы на языке?',
    subtext: 'Оценка восприятия танинового шока',
    options: [
      {
        text: 'Неприятно вяжет, спешу запить водой.',
        score: 5,
        latinRemark: 'Sensio normalis',
      },
      {
        text: 'Странная мазохистская сладость стянутых уст.',
        score: 15,
        latinRemark: 'Voluptas constricta (Связанное наслаждение)',
      },
      {
        text: 'Истинный трансцендентный экстаз: рот онемел, а похоть вспыхнула.',
        score: 25,
        latinRemark: 'Furor tannicus summus (Высшее таниновое безумие)',
      },
    ],
  },
];

export function calculateDiagnosis(totalScore: number): DiagnosisResult {
  if (totalScore <= 30) {
    return {
      score: totalScore,
      stageName: 'Невинный сборщик кореньев',
      latinDiagnosis: 'Innocens Frutarius I-gradus',
      description: 'Ваш разум пока чист от навязчивого сокового морока. Вы способны съесть хурму, не воображая себе оргиастический шабаш на скотном дворе.',
      recommendedPenance: 'Три молитвы Святому Блендерию и воздержание от перетирания ягод до заката.',
      tanninLevel: '12% (Безопасный)',
      riskOfVacuumBlenderus: 'Низкий',
    };
  }

  if (totalScore <= 55) {
    return {
      score: totalScore,
      stageName: 'Соблазненный послушник сладкой жижи',
      latinDiagnosis: 'Novitius Libidinosus II-gradus',
      description: 'Первые ростки порока уже дали всходы. Когда капли сока стекают по каменному пестику, ваше дыхание учащается, а мысли уплывают в сторону сельских пасторалей.',
      recommendedPenance: 'Ношение власяницы из грубой мешковины и принудительное употребление сухого овса без добавления мякоти.',
      tanninLevel: '48% (Повышенный)',
      riskOfVacuumBlenderus: 'Умеренный',
    };
  }

  if (totalScore <= 80) {
    return {
      score: totalScore,
      stageName: 'Одержимый адепт Fructus Libido',
      latinDiagnosis: 'Fructus Libido Manifestus III-gradus',
      description: 'Вы глубоко в паутине древней хурмовой чумы. Перетертая клетчатка вступила в необратимую реакцию с вашим рассудком. Чаша блендера мерещится вам даже во сне.',
      recommendedPenance: 'Строгая изоляция в сухом чулане без доступа к ступкам, пестикам и волокнистым плодам.',
      tanninLevel: '79% (Опасный)',
      riskOfVacuumBlenderus: 'Критический',
    };
  }

  return {
    score: totalScore,
    stageName: 'Верховный еретик Vacuum Blenderus',
    latinDiagnosis: 'Archichaoticus Blenderi IV-gradus',
    description: 'Полная капитуляция разума перед плодовой похотью. Любой пустой сосуд вызывает приступ острой эротической мании с участием доярок, хурмового сока и диких инстинктов.',
    recommendedPenance: 'Бессрочное покаяние перед алтарем Очищающего Жернова. Изъятие всех бытовых измельчителей под надзор Инквизиции.',
    tanninLevel: '98% (Летально сладострастный)',
    riskOfVacuumBlenderus: 'Неизлечимый',
  };
}

export interface MortarState {
  persimmons: number;
  figs: number;
  pomegranates: number;
  grindCount: number;
}

export interface MortarStatus {
  viscosityPercent: number;
  pulpDensity: number;
  tanninPotency: number;
  stageTitle: string;
  sensoryQuote: string;
  isBlenderEmpty: boolean;
}

export function calculateMortarStatus(state: MortarState): MortarStatus {
  const totalFruits = state.persimmons + state.figs + state.pomegranates;
  const isBlenderEmpty = totalFruits === 0;

  if (isBlenderEmpty) {
    return {
      viscosityPercent: 0,
      pulpDensity: 0,
      tanninPotency: 0,
      stageTitle: 'Vacuum Blenderus (Ужас пустой чаши)',
      sensoryQuote: 'Чаша холодна и пуста. В глазах темнеет, в сознании всплывают греховные образы доярок и дикий первобытный голод плоти.',
      isBlenderEmpty: true,
    };
  }

  // Fruit weight contribution
  const fruitBase = state.persimmons * 12 + state.figs * 15 + state.pomegranates * 8;
  const grindFactor = Math.min(state.grindCount * 4, 60);
  const viscosityPercent = Math.min(100, Math.round(fruitBase * 0.4 + grindFactor));

  const tanninPotency = Math.min(100, Math.round((state.persimmons * 25) + (state.grindCount * 2)));
  const pulpDensity = Math.min(100, Math.round((totalFruits * 18) + (state.grindCount * 3)));

  let stageTitle = 'Легкий сок послушника';
  let sensoryQuote = 'Плоды едва соприкоснулись с гранитом. Аромат робок, танины дремлют.';

  if (viscosityPercent >= 80) {
    stageTitle = 'Нечестивый экстракт Fructus Libido';
    sensoryQuote = 'Жижа стала густой, как грех патриарха. Сладкая вяжущая смола готова затуманить самый строгий монашеский рассудок.';
  } else if (viscosityPercent >= 50) {
    stageTitle = 'Плотная искусительная кашица';
    sensoryQuote = 'Пестик с трудом проворачивается в сладострастной мякоти. Воздух в келье наполняется испарениями безумия.';
  } else if (viscosityPercent >= 25) {
    stageTitle = 'Брожение волокон и семян';
    sensoryQuote = 'Косточки с треском лопаются. Первый ручеек темно-янтарного нектара стекает по желобку.';
  }

  return {
    viscosityPercent,
    pulpDensity,
    tanninPotency,
    stageTitle,
    sensoryQuote,
    isBlenderEmpty: false,
  };
}
