import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onAdd: (title: string, content: string) => void;
}

export const AddReportDialog = ({ open, onOpenChange, onAdd }: Props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;
    onAdd(title.trim(), content.trim());
    setTitle("");
    setContent("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-foreground">Add Report</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            placeholder="Report title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-muted border-border text-foreground"
          />
          <Textarea
            placeholder="Report content..."
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={5}
            className="bg-muted border-border text-foreground"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-tertiary text-tertiary-foreground hover:bg-tertiary/90">
            Add
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
