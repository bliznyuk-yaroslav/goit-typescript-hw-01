enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}



// 1 варіант як вирішити питання
// const isWeekend = (day: DayOfWeek): boolean => {
//   if (day === DayOfWeek.Saturday || day === DayOfWeek.Sunday) {
//     return true;
//   } else {
//     return false;
//   }
// };


//  2 варіант більш короткий, і також вирішує питання
const isWeekend = (day: DayOfWeek): boolean => {
    return day === DayOfWeek.Saturday || day === DayOfWeek.Sunday;

};
export { DayOfWeek, isWeekend };
