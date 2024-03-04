import jsonData from "./dataLessons.json";

export function fetchDataByLessonNumber(lessonNumber = 1) {
  try {
    const lessonData = jsonData.find(item => item.lesson_number === lessonNumber);
    if (lessonData) {
      return lessonData;
    } else {
      throw new Error('Lesson data not found');
    }
  } catch (error) {
    console.error('Error fetching data by lesson number:', error);
    throw error;
  }
}


export const lengthLessons = () => {

  return jsonData.length;
}

