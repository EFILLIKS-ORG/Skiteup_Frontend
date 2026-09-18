import { useState } from 'react';

import {
  Pagination,
  DatePicker,
  ExamTimer,
  QuestionNumber,
  AnswerOption,
  QuestionCard,
  Warning,
  ScoreDisplay,
  StarRating,
  Tooltip,
  Chip,
  Label,
  Switch,
  Divider,
} from './components';

function App() {
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);

  // DatePicker
  const [date, setDate] = useState('');

  // Answer
  const [selectedAnswer, setSelectedAnswer] = useState('');

  // Star Rating
  const [rating, setRating] = useState(3);

  // Switch
  const [enabled, setEnabled] = useState(false);

  //Chip
  const [chips, setChips] = useState(['CSE', 'IT', 'AIDS']);
    const removeChip = (chipToRemove: string) => {
    setChips((previous) =>
      previous.filter((chip) => chip !== chipToRemove),
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-5xl space-y-8">
        {/* PAGE TITLE */}
        <div>
          <h1 className="text-3xl font-bold">Component Test Page</h1>
        </div>

        <Divider />

        {/* 1. PAGINATION */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">1. Pagination</h2>

          <p className="mb-4">
            Current Page: <b>{currentPage}</b>
          </p>

          <Pagination currentPage={currentPage} totalPages={10} onPageChange={setCurrentPage} />
        </section>

        {/* 2. DATE PICKER */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">2. DatePicker</h2>

          <div className="max-w-sm">
            <DatePicker label="Select Exam Date" value={date} onChange={setDate} />
          </div>

          <p className="mt-3 text-sm text-gray-500">Selected Date: {date || 'No date selected'}</p>
        </section>

        {/* 3. EXAM TIMER */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">3. ExamTimer</h2>

          <ExamTimer initialSeconds={3600} onTimeUp={() => alert('Exam Time Over!')} />
        </section>

        {/* 4. QUESTION NUMBER */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">4. QuestionNumber</h2>

          <div className="flex gap-2">
            <QuestionNumber number={1} active />

            <QuestionNumber number={2} answered />

            <QuestionNumber number={3} />

            <QuestionNumber number={4} />
          </div>
        </section>

        {/* 5 + 6. QUESTION CARD + ANSWER OPTION */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">5. AnswerOption + 6. QuestionCard</h2>

          <QuestionCard
            questionNumber={1}
            question="Which library is used to build user interfaces?"
            marks={1}
          >
            <AnswerOption
              label="A"
              value="React"
              selected={selectedAnswer === 'React'}
              onClick={setSelectedAnswer}
            />

            <AnswerOption
              label="B"
              value="MongoDB"
              selected={selectedAnswer === 'MongoDB'}
              onClick={setSelectedAnswer}
            />

            <AnswerOption
              label="C"
              value="Node.js"
              selected={selectedAnswer === 'Node.js'}
              onClick={setSelectedAnswer}
            />

            <AnswerOption
              label="D"
              value="Railway"
              selected={selectedAnswer === 'Railway'}
              onClick={setSelectedAnswer}
            />
          </QuestionCard>

          <p className="mt-3 text-sm text-gray-500">Selected Answer: {selectedAnswer || 'None'}</p>
        </section>

        {/* 7. WARNING */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">7. Warning</h2>

          <Warning
            title="Warning"
            message="Leaving this page may submit your exam automatically."
          />
        </section>

        {/* 8. SCORE DISPLAY */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">8. ScoreDisplay</h2>

          <div className="max-w-xs">
            <ScoreDisplay score={8} total={10} />
          </div>
        </section>

        {/* 9. STAR RATING */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">9. StarRating</h2>

          <StarRating value={rating} onChange={setRating} />

          <p className="mt-2 text-sm text-gray-500">Rating: {rating}/5</p>
        </section>

        {/* 10. TOOLTIP */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">10. Tooltip</h2>

          <Tooltip content="Click here to edit the student" position="bottom">
            <button className="rounded-lg bg-[#2F39A9] px-4 py-2 text-white ">Hover Me</button>
          </Tooltip>
        </section>

        {/* 11. CHIP */}
        <section className="rounded-xl bg-white p-6">
          <h1 className="mb-5 text-2xl font-bold">
          Chip Test
        </h1>

        <div className="flex flex-wrap gap-3">
          {chips.map((chip) => (
            <Chip
              key={chip}
              label={chip}
              onRemove={() => removeChip(chip)}
            />
          ))}
        </div>
        </section>

        {/* 12. LABEL */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">13. Label</h2>

          <Label htmlFor="student-name" required>
            Student Name
          </Label>

          <input
            id="student-name"
            className="mt-2 block w-full max-w-sm rounded-lg border border-gray-300 p-3"
            placeholder="Enter student name"
          />
        </section>

        {/* 13. SWITCH */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">14. Switch</h2>

          <Switch checked={enabled} onChange={setEnabled} label="Enable Exam" />

          <p className="mt-2 text-sm text-gray-500">Status: {enabled ? 'Enabled' : 'Disabled'}</p>
        </section>

        {/* 14. DIVIDER */}
        <section className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-xl font-semibold">15. Divider</h2>

          <p>Content above divider</p>

          <Divider className="my-4" />

          <p>Content below divider</p>
        </section>
      </div>
    </div>
  );
}

export default App;
