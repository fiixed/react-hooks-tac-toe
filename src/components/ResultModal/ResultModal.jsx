import React from 'react';
import './ResultModal.css';

export default function ResultModal() {
    return (
        <div id="modal-overlay">
        <div id="game-result-modal">
            <div id="result-container">
                <div id="winner-container">
                    <span></span>
                </div>
            </div>
            <div id="new-game-container">
                <button id="new-game-button">Start New Game</button>
            </div>
        </div>
    </div>
    )
}
