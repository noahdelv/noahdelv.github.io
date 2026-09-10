import { skills } from '../data/projects';

export default function SkillsGrid() {
    return (
        <div className="skills-grid">
            {skills.map(({ label, items }) => (
                <div className="skills-group" key={label}>
                    <div className="skills-label">{label}</div>
                    <div className="skills-list">
                        {items.map((item) => (
                            <div key={item}>{item}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
