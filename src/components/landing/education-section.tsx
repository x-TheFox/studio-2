import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export function EducationSection() {
  return (
    <section id="education" className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary lg:text-4xl">Education</h2>
        </div>
        <div className="mt-12 flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle>B.Tech – Computer Science and Business Systems</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Panimalar Engineering College, Chennai</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
