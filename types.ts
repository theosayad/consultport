export interface KpiData {
    name: string;
    value: number;
    target: number;
    unit: string;
}

export interface TimelineItem {
    phase: string;
    title: string;
    description: string;
    details: string[];
    color: string;
}

export interface InitiativeProps {
    isActive: boolean;
    onClick: () => void;
}