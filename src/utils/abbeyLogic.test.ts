import test from 'node:test';
import assert from 'node:assert/strict';
import { TREATISE_ARCHIVE, CHAPTERS_DATA, INQUISITION_TABLE, getFullTreatiseStats } from './treatiseData';

test('Treatise contains all 8 complete canonical chapters', () => {
  assert.equal(CHAPTERS_DATA.length, 8);
  for (let i = 0; i < 8; i++) {
    assert.equal(CHAPTERS_DATA[i].number, i + 1);
    assert.ok(CHAPTERS_DATA[i].titleRu.length > 5);
    assert.ok(CHAPTERS_DATA[i].content.length >= 2);
  }
});

test('Chapter 3 (Manus Agitatoris) contains full verbatim text', () => {
  const ch3 = CHAPTERS_DATA[2];
  assert.equal(ch3.number, 3);
  assert.ok(ch3.titleRu.includes('Дрочка'));
  assert.ok(ch3.content[0].includes('Vacuum Blenderus'));
  assert.ok(ch3.content[1].includes('Бартоломей Безумный'));
  assert.ok(ch3.content[2].includes('Manus Agitatoris'));
});

test('Chapter 4 (Cultus Vulvae) contains full verbatim text', () => {
  const ch4 = CHAPTERS_DATA[3];
  assert.equal(ch4.number, 4);
  assert.ok(ch4.titleRu.includes('женской пилотки'));
  assert.ok(ch4.content[1].includes('священным сосудом'));
  assert.ok(ch4.content[2].includes('мангового пюре'));
  assert.ok(ch4.content[2].includes('расплетать им рыболовные сети'));
});

test('Chapter 5 (Thesaurus Analis) contains full verbatim text', () => {
  const ch5 = CHAPTERS_DATA[4];
  assert.equal(ch5.number, 5);
  assert.ok(ch5.titleRu.includes('анальной хурмовой копилки'));
  assert.ok(ch5.content[0].includes('Thesaurus Analis Diospyros'));
  assert.ok(ch5.content[2].includes('Древо Познания'));
});

test('Chapter 6 (Mechanical pressure & blacksmiths) contains full verbatim text', () => {
  const ch6 = CHAPTERS_DATA[5];
  assert.equal(ch6.number, 6);
  assert.ok(ch6.titleRu.includes('отдолбили в очко'));
  assert.ok(ch6.content[2].includes('кузнецов и дровосеков'));
  assert.ok(ch6.content[2].includes('анальный смузи'));
});

test('Chapter 7 and Inquisition Table contains all 5 historical rows', () => {
  assert.equal(INQUISITION_TABLE.length, 5);
  assert.equal(INQUISITION_TABLE[0].points, 10);
  assert.equal(INQUISITION_TABLE[1].points, 25);
  assert.equal(INQUISITION_TABLE[2].points, 50);
  assert.equal(INQUISITION_TABLE[3].points, 75);
  assert.equal(INQUISITION_TABLE[4].points, 100);
});

test('Chapter 8 awards Grand Master of the Ripe Persimmon Order', () => {
  const ch8 = CHAPTERS_DATA[7];
  assert.ok(ch8.content[2].includes('Великий магистр Ордена Спелой Хурмы'));
  assert.ok(ch8.content[2].includes('сила блендера'));
});

test('getFullTreatiseStats validates complete prose volume', () => {
  const stats = getFullTreatiseStats();
  assert.equal(stats.totalChapters, 8);
  assert.equal(stats.tableRows, 5);
  assert.ok(stats.totalWords > 500);
});
