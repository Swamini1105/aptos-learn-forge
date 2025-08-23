import { Clock, Users, Star, BookOpen, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface CourseCardProps {
  id: string;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  level: string;
  progress?: number;
  isEnrolled?: boolean;
  image: string;
}

const CourseCard = ({
  title,
  instructor,
  description,
  duration,
  students,
  rating,
  level,
  progress,
  isEnrolled = false,
  image
}: CourseCardProps) => {
  return (
    <Card className="group hover:shadow-course transition-all duration-300 border-0 bg-card/50 backdrop-blur-sm hover:scale-[1.02]">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden rounded-t-lg h-48">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3">
            <Badge 
              variant="secondary" 
              className="bg-background/80 backdrop-blur-sm text-foreground"
            >
              {level}
            </Badge>
          </div>
          <div className="absolute top-3 right-3 flex items-center space-x-1 bg-background/80 backdrop-blur-sm rounded-full px-2 py-1">
            <Star className="h-3 w-3 fill-warning text-warning" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-sm text-muted-foreground">by {instructor}</p>
          </div>

          <p className="text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>

          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{students} students</span>
            </div>
          </div>

          {isEnrolled && progress !== undefined && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Progress</span>
                <span className="text-sm text-muted-foreground">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        {isEnrolled ? (
          <Button className="w-full bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
            <BookOpen className="mr-2 h-4 w-4" />
            Continue Learning
          </Button>
        ) : (
          <Button className="w-full" variant="outline">
            Enroll Now
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default CourseCard;