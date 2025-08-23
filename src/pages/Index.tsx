import Header from "@/components/Header";
import CourseCard from "@/components/CourseCard";
import ProgressIndicator from "@/components/ProgressIndicator";
import { courses, assignments } from "@/data/courses";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, BookOpen, Award, TrendingUp, Clock } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";
import moveFundamentalsImage from "@/assets/course-move-fundamentals.jpg";
import defiImage from "@/assets/course-defi.jpg";
import securityImage from "@/assets/course-security.jpg";

const Index = () => {
  const courseImages = {
    "move-fundamentals": moveFundamentalsImage,
    "aptos-defi": defiImage,
    "move-security": securityImage
  };

  const enrolledCourses = courses.filter(course => course.isEnrolled);
  const recentAssignments = assignments.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundBlendMode: 'overlay'
          }}
        />
        <div className="relative container mx-auto text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Master Move Programming
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Complete Learning Management System for blockchain development. Build smart contracts, DeFi applications, and secure systems on Aptos.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:opacity-90">
                <BookOpen className="mr-2 h-5 w-5" />
                Browse Courses
              </Button>
              <Button size="lg" variant="outline">
                View Dashboard
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12 space-y-12">
        {/* Dashboard Overview */}
        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold text-foreground">My Learning Dashboard</h2>
              <Button variant="outline">
                <TrendingUp className="mr-2 h-4 w-4" />
                View Analytics
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {enrolledCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  {...course}
                  image={courseImages[course.id as keyof typeof courseImages]}
                />
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <ProgressIndicator
              totalCourses={3}
              completedCourses={1}
              totalAssignments={8}
              completedAssignments={5}
              averageGrade={92}
            />

            {/* Recent Assignments */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary" />
                  <span>Recent Assignments</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentAssignments.map((assignment) => (
                  <div key={assignment.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                    <div className="space-y-1">
                      <h4 className="font-medium text-sm">{assignment.title}</h4>
                      <p className="text-xs text-muted-foreground">{assignment.course}</p>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3" />
                        <span>Due {assignment.dueDate}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end space-y-1">
                      <Badge 
                        variant={
                          assignment.status === 'submitted' ? 'default' : 
                          assignment.status === 'pending' ? 'secondary' : 
                          'outline'
                        }
                        className="text-xs"
                      >
                        {assignment.status}
                      </Badge>
                      {assignment.grade && (
                        <span className="text-xs font-bold text-success">{assignment.grade}%</span>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* All Courses Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-foreground">All Courses</h2>
            <Button variant="outline">View All</Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                {...course}
                image={courseImages[course.id as keyof typeof courseImages]}
              />
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground">Join Thousands of Developers</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2.8K+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-success">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-warning">4.9</div>
                <div className="text-sm text-muted-foreground">Avg Rating</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;
