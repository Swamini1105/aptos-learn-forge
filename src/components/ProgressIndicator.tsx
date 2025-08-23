import { CheckCircle, Circle, Award } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProgressIndicatorProps {
  totalCourses: number;
  completedCourses: number;
  totalAssignments: number;
  completedAssignments: number;
  averageGrade: number;
}

const ProgressIndicator = ({
  totalCourses,
  completedCourses,
  totalAssignments,
  completedAssignments,
  averageGrade
}: ProgressIndicatorProps) => {
  const courseProgress = (completedCourses / totalCourses) * 100;
  const assignmentProgress = (completedAssignments / totalAssignments) * 100;

  return (
    <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-0">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Award className="h-5 w-5 text-primary" />
          <span>Learning Progress</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Course Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Courses Completed</span>
            <span className="text-sm text-muted-foreground">
              {completedCourses}/{totalCourses}
            </span>
          </div>
          <Progress value={courseProgress} className="h-2" />
        </div>

        {/* Assignment Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Assignments Done</span>
            <span className="text-sm text-muted-foreground">
              {completedAssignments}/{totalAssignments}
            </span>
          </div>
          <Progress value={assignmentProgress} className="h-2" />
        </div>

        {/* Grade Average */}
        <div className="p-4 bg-background/50 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Average Grade</span>
            <span className="text-lg font-bold text-success">{averageGrade}%</span>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 pt-4 border-t">
          <div className="text-center">
            <div className="text-lg font-bold text-primary">{totalCourses}</div>
            <div className="text-xs text-muted-foreground">Total Courses</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-accent">{totalAssignments}</div>
            <div className="text-xs text-muted-foreground">Assignments</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-success">{averageGrade}%</div>
            <div className="text-xs text-muted-foreground">Avg Grade</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressIndicator;