import '../page.css';

let SemesterProject = () => {
    return (
        <div>
            <h2>Semester Project</h2>
            <p><strong>Title:</strong> Computationally efficient robust MPC using optimized constraint tightening. <br /><strong>Lab:</strong> Automatic Control Lab, ETH.</p>
            <a className='link-style' href="https://arxiv.org/abs/2204.02142" target="_blank">Paper</a>
            <h3>Abstract</h3>
            <p> A robust model predictive control (MPC) method
                is presented for linear, time-invariant systems affected by
                bounded additive disturbances. The main contribution is the
                offline design of a disturbance-affine feedback gain whereby the
                resulting constraint tightening is minimized. This is achieved
                by formulating the constraint tightening problem as a convex
                optimization problem with the feedback term as a variable. The
                resulting MPC controller has the computational complexity of
                nominal MPC, and guarantees recursive feasibility, stability
                and constraint satisfaction. The advantages of the proposed
                approach compared to existing robust MPC methods are
                demonstrated using numerical examples. </p>
        </div>
    );
};

export default SemesterProject;
