import { ArrowRight, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "../components/ui/button";
import { IconBadge, Reveal, SectionIntro, SectionShell } from "../components/ui/premium";

export default function NotFound() {
  return (
    <div className="overflow-x-hidden bg-[#FAF6F0] text-[#1A1A1A] min-h-[70vh] flex flex-col justify-center">
      <SectionShell className="bg-hero-gradient pt-16 pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal immediate>
            <div className="flex justify-center mb-6">
              <IconBadge icon={<HelpCircle className="h-6 w-6" />} />
            </div>
            <SectionIntro
              align="center"
              eyebrow="404 Error"
              title="Page Not Found"
              body="The page you are looking for doesn't exist, has been moved, or is temporarily unavailable."
              titleClassName="text-5xl md:text-6xl"
            />
            <div className="mt-8 flex justify-center">
              <Button asChild size="lg">
                <Link to="/">
                  Return Home
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </SectionShell>
    </div>
  );
}
