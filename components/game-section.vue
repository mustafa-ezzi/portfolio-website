<template>
  <section id="code-quiz" class="quiz-section">
    <h2 class="section-title">🎯 Code Guessing Game</h2>
    <p class="quiz-intro">
      Test your JavaScript skills! Can you guess the output? Show off your coding intuition 😎
    </p>
    
    <div class="quiz-card" v-if="currentQuestion">
      <pre class="code-block">{{ currentQuestion.code }}</pre>
      <div class="options">
        <button
          v-for="(option, idx) in currentQuestion.options"
          :key="idx"
          :class="getOptionClass(option)"
          @click="selectOption(option)"
          :disabled="answerSelected"
        >
          {{ option }}
        </button>
      </div>
      <div class="feedback" v-if="answerSelected">
        <p :class="{ correct: isCorrect, wrong: !isCorrect }">
          {{ feedbackMessage }}
        </p>
        <button class="next-button" @click="nextQuestion">Next ➡</button>
      </div>
    </div>

    <button class="back-to-top" @click="scrollToHero">⬆ Back to Top</button>
  </section>


</template>

<script setup>
import { ref, computed } from 'vue'
const scrollToHero = () => {
  const hero = document.getElementById('hero')
  if (hero) {
    hero.scrollIntoView({ behavior: 'smooth' })
  }
}

const questions = [
  {
    code: `const a = [1, 2, 3]\nconsole.log(typeof a)`,
    options: ['object', 'array', 'undefined'],
    answer: 'object',
    explanation: 'Arrays are a type of object in JavaScript.'
  },
  {
    code: `let x\nconsole.log(x ?? 'default')`,
    options: ['undefined', 'null', 'default'],
    answer: 'default',
    explanation: '`??` returns right-hand value when left is null or undefined.'
  },
  {
    code: `[..."Vue"].length`,
    options: ['1', '3', 'undefined'],
    answer: '3',
    explanation: 'The spread operator splits strings into characters: "V", "u", "e".'
  },
]

const currentIndex = ref(0)
const selectedOption = ref(null)

const currentQuestion = computed(() => questions[currentIndex.value])
const answerSelected = computed(() => selectedOption.value !== null)
const isCorrect = computed(() =>
  selectedOption.value === currentQuestion.value.answer
)

const feedbackMessage = computed(() =>
  isCorrect.value
    ? '✅ Correct! ' + currentQuestion.value.explanation
    : '❌ Incorrect. ' + currentQuestion.value.explanation
)

const selectOption = (option) => {
  if (!answerSelected.value) {
    selectedOption.value = option
  }
}

const nextQuestion = () => {
  selectedOption.value = null
  currentIndex.value = (currentIndex.value + 1) % questions.length
}

const getOptionClass = (option) => {
  if (!answerSelected.value) return ''
  if (option === currentQuestion.value.answer) return 'correct'
  if (option === selectedOption.value) return 'wrong'
  return ''
}
</script>


<style>
.quiz-section {
    padding: 4rem 5%;
    background: #f5f8fb;
    border-top: 2px solid #00bfa6;
    text-align: center;
}

.quiz-card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    max-width: 700px;
    margin: 0 auto;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

.code-block {
    text-align: left;
    background: #272822;
    color: #f8f8f2;
    padding: 1rem;
    border-radius: 8px;
    font-family: 'Courier New', monospace;
    margin-bottom: 1.5rem;
    white-space: pre-wrap;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.options button {
    padding: 0.75rem 1.25rem;
    font-size: 1rem;
    border-radius: 6px;
    border: none;
    background: #eee;
    cursor: pointer;
    transition: all 0.3s ease;
}

.options button:hover {
    background: #ddd;
}

.options button.correct {
    background: #00bfa6;
    color: white;
}

.options button.wrong {
    background: #ff6b6b;
    color: white;
}

.feedback {
    margin-top: 1.5rem;
    font-weight: bold;
}

.feedback.correct {
    color: #00bfa6;
}

.feedback.wrong {
    color: #d9534f;
}
.quiz-intro {
  font-size: 1.1rem;
  margin-bottom: 2rem;
  color: #333;
  max-width: 600px;
  margin-inline: auto;
}

.back-to-top {
  margin-top: 3rem;
  background: transparent;
  color: #00bfa6;
  border: 2px solid #00bfa6;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

.back-to-top:hover {
  background: #00bfa6;
  color: white;
}


.next-button {
    margin-top: 1rem;
    background: #00bfa6;
    color: white;
    padding: 0.6rem 1.2rem;
    border: none;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.3s ease;
}

.next-button:hover {
    background: #009c88;
}
</style>