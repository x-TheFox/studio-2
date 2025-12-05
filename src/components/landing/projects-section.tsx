import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Code } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export function ProjectsSection() {
  const projects: any[] = [];

  return (
    <section id="projects" className="w-full py-16 md:py-24">
      <div className="container mx-auto max-w-screen-lg px-4">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="scroll-m-20 text-3xl font-extrabold tracking-tight text-primary lg:text-4xl">My Projects</h2>
          <p className="mt-4 text-lg text-muted-foreground">A selection of my recent work. More coming soon!</p>
        </div>
        {projects.length > 0 && (
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="flex transform flex-col overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
                {project.imageUrl && (
                  <Image
                    src={project.imageUrl}
                    alt={`Screenshot of ${project.title}`}
                    data-ai-hint={project.imageHint}
                    width={600}
                    height={400}
                    className="h-48 w-full object-cover"
                  />
                )}
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{project.description}</CardDescription>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                  </div>
                </CardContent>
                <CardFooter className="space-x-4">
                  <Button asChild variant="link" className="p-0 text-primary">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="link" className="p-0 text-primary">
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                      View Code <Code className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
