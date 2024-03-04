import jsonData from "./data.json";

// Inner function to calculate the average grade for a student
export function calculateStudentAverageGrade(tasks) {
    const completedTasks = tasks.filter(task => task.status !== "empty" && task.status !== "inprogress");

    const totalTasks = completedTasks.length;

    if (totalTasks === 0) {
        return 0;
    }

    let totalWeightedGrade = 0;
    let totalWeight = 0;

    completedTasks.forEach(task => {
        if (task.grade === "none" && task.status === "checked") {
            totalWeight += task.points;
            totalWeightedGrade += task.points;
        } else if (task.grade !== "none" && task.grade.includes('/')) {
            const [earned, total] = task.grade.split('/').map(Number);
            const taskWeight = task.points;
            totalWeight += taskWeight;
            totalWeightedGrade += (earned / total) * taskWeight;
        }
    });

    const averageGrade = Math.round((totalWeightedGrade / totalWeight) * 100);
    return averageGrade;
}

export function calculateAverageGrade(data) {
    const studentsData = data.students;
    let totalGrade = 0;
    let totalStudents = 0;

    studentsData.forEach(student => {
        const studentAverageGrade = calculateStudentAverageGrade(student.tasks);
        totalGrade += studentAverageGrade;
        totalStudents++;
    });

    if (totalStudents === 0) {
        return 0;
    }

    return Math.round(totalGrade / totalStudents);
}

export function calculateStudentInfo(data) {

  const studentsData = data.students;
  return studentsData.map(student => {
    const studentTasks = student.tasks;
    function calculateFinishedPercentage(studentTasks) {
      const totalTasks = studentTasks.length;
      let complete = 0;
  
      studentTasks.forEach(task => {
        if (task.status !== 'inprogress' && task.status !== 'empty' && task.status !== 'skipped') {
          complete++;
        }
      });
  
      return Math.round((complete / totalTasks) * 100);
    }
  
    function calculateTasksArray(studentTasks) {
      return studentTasks.map((task,index) => {
        if (task.grade !== "none" && task.grade.includes('/')) {
          const [earned, total] = task.grade.split('/').map(Number);
          
          // Check if total is 0 to avoid division by zero
          const gradePercentage = total !== 0 ? (earned / total) * 100 : 0;
    
          // Consider the points of the task in the grade calculation
          const weightedGradePercentage = gradePercentage * (task.points / 100);

          let taskStatus = '';
          if (gradePercentage < 50) {
            taskStatus = 'failed';
          } else if (gradePercentage >= 50 && gradePercentage < 80) {
            taskStatus = 'mid';
          } else {
            taskStatus = 'perfect';
          }
    
          return {
            name:  index + 1 || 'Unnamed Task',
            grade:  task.grade,
            status: taskStatus,
          };
        } else {
          // Handle case where grade is not in expected format or is "none"
          return {
            name:  index + 1 || 'Unnamed Task',
            grade: isNaN(task.grade) ? 'none' : parseFloat(task.grade),
            status: task.status,
          };
        }
      });
    }
    
    if (studentTasks.length === 0) {
      return {
        name: student.name,
        grade: 0,
        finished: 0,
        tasks: []
      };
    }

    const finishedPercentage = calculateFinishedPercentage(studentTasks);
    const averageGrade = calculateStudentAverageGrade(studentTasks);
    const tasksArray = calculateTasksArray(studentTasks);

    return {
      name: student.name,
      grade: averageGrade,
      finished: finishedPercentage,
      tasks: tasksArray
    };
  });
}

export function countSkippedStudents(data) {
  const studentsData = data.students;
  let skippedCount = 0;

  studentsData.forEach(student => {
      if (student.skipped) {
          skippedCount++;
      }
  });

  return skippedCount;
}

export const failedClass = (data) => {
  let failedStudents = 0;
  const studentsData = data.students;

  studentsData.forEach(student => {
      const studentTasks = student.tasks;
      const averageGrade = calculateStudentAverageGrade(studentTasks);

      if (averageGrade < 50) {
          failedStudents++;
      }
  });

  return failedStudents;
}

export function getStudentDetails(studentName,data) {

  const student = data.students.find(student => student.name === studentName);

  if (student) {
      return {
          name: student.name,
          skipped: student.skipped === "skipped" ? "לא נוכח" : "נוכח בשיעור",
          comments: student.comments,
      };
  } else {
      return { error: "Student not found" };
  }
}
