export default function SkillBar({ name }) {
    return (
        <div className="skill-box-container">
            <style>{`
                @keyframes slideInUp {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes borderGlow {
                    0% {
                        border-color: rgba(59, 130, 246, 0.3);
                    }
                    50% {
                        border-color: rgba(59, 130, 246, 0.7);
                    }
                    100% {
                        border-color: rgba(59, 130, 246, 0.3);
                    }
                }

                .skill-box {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 20px;
                    border: 2px solid rgba(59, 130, 246, 0.3);
                    border-radius: 8px;
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(99, 102, 241, 0.05) 100%);
                    font-weight: 600;
                    color: #1f2937;
                    transition: all 0.3s ease;
                    animation: slideInUp 0.6s ease-out forwards;
                    position: relative;
                    overflow: hidden;
                }

                .skill-box:hover {
                    transform: translateY(-4px) scale(1.05);
                    border-color: rgb(59, 130, 246);
                    background: linear-gradient(135deg, rgba(59, 130, 246, 0.15) 0%, rgba(99, 102, 241, 0.15) 100%);
                    box-shadow: 0 12px 24px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.1);
                }

                .skill-box::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: -100%;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
                    transition: left 0.5s;
                }

                .skill-box:hover::before {
                    left: 100%;
                }
            `}</style>
            <div className="skill-box">
                {name}
            </div>
        </div>
    );
}
