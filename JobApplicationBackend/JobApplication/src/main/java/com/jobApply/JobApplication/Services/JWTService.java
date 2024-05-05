package com.jobApply.JobApplication.Services;

import org.springframework.security.core.userdetails.UserDetails;

import java.util.Map;

public interface JWTService {
    String generateToken(UserDetails userDetails);
    public String extractUserName(String token);

    public boolean isTokenValid(String token, UserDetails userDetails);

    public String generateRefreshToken(Map<String,Object> extraClaims, UserDetails userDetails);
}
