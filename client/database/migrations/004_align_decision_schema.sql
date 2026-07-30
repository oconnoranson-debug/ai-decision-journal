-- ============================================================================
-- AI Decision Journal
-- Migration 004
-- Align Decision Persistence Schema
-- ============================================================================

ALTER TABLE public.decisions
RENAME COLUMN background TO context;

ALTER TABLE public.decisions
ADD COLUMN reviewer text;

ALTER TABLE public.decisions
ADD COLUMN reviewed_at date;

CREATE TABLE public.decision_tags (
    id text PRIMARY KEY,
    decision_id text NOT NULL
        REFERENCES public.decisions(id)
        ON DELETE CASCADE,
    tag text NOT NULL,
    sort_order integer NOT NULL DEFAULT 0
);

CREATE INDEX idx_decision_tags_decision_id
ON public.decision_tags(decision_id);