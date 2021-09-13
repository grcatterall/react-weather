import React from "react";

const SkeletonCard = () => {
    return (
        <div className="ui raised card">
            <div className="content">
                <div className="header skeleton skeleton-header"></div>
                <div className="description">
                    <p className="skeleton skeleton-text"></p>
                    <p className="skeleton skeleton-text"></p>
                    <p className="skeleton skeleton-text"></p>
                </div>
            </div>
            <div className="extra content">
                <div className="right floated author">
                </div>
            </div>
        </div>
    );
}

export default SkeletonCard;