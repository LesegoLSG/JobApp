package com.jobApply.JobApplication.Services;

import com.jobApply.JobApplication.Entities.User;
import com.jobApply.JobApplication.dto.JwtAuthenticationResponse;
import com.jobApply.JobApplication.dto.RefreshTokenRequest;
import com.jobApply.JobApplication.dto.SignInRequest;
import com.jobApply.JobApplication.dto.SignUpRequest;

public interface AuthenticationService {
    public User signUp(SignUpRequest singUpRequest);

    public JwtAuthenticationResponse signIn(SignInRequest signInRequest);

    public JwtAuthenticationResponse refreshToken(RefreshTokenRequest refreshTokenRequest);
}
