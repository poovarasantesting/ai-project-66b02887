import { Badge } from "@/components/ui/badge";

interface SkillBadgeProps {
  name: string;
}

const SkillBadge = ({ name }: SkillBadgeProps) => {
  return (
    <Badge variant="outline" className="px-3 py-1 text-sm font-medium">
      {name}
    </Badge>
  );
};

export default SkillBadge;