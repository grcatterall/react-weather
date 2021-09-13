import React from "react";

const SkeletonCard = () => {
    return (
        <div>
            <div className="content">
                <div className="header skeleton skeleton-header"></div>
                <div className="description">
                    <p className="skeleton skeleton-text"></p>
                    <p className="skeleton skeleton-text"></p>
                    <p className="skeleton skeleton-text"></p>
                </div>
                <br/>
                <div className="description">
                    <p className="skeleton skeleton-text"></p>
                    <p className="skeleton skeleton-text"></p>
                    <p className="skeleton skeleton-text"></p>
                </div>
                <br/>
            </div>
        </div>
    );
}

export default SkeletonCard;