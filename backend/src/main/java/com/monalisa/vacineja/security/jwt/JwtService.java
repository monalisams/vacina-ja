package com.monalisa.vacineja.security.jwt;

import com.monalisa.vacineja.entity.User;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import org.springframework.stereotype.Service;
import org.springframework.beans.factory.annotation.Value;
import io.jsonwebtoken.Jwts;
import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.Date;

@Service
public class JwtService {

    @Value("${security.jwt.expiration}")
    private String expiration;

    @Value("${security.jwt.signature-key}")
    private String signatureKey;

    public String generateToken(User user){
        long expString = Long.valueOf(expiration);
        LocalDateTime dateExpiration = LocalDateTime.now().plusMinutes(expString);
        Instant instant = dateExpiration.atZone(ZoneId.systemDefault()).toInstant();
        Date data = Date.from(instant);


        return Jwts
                .builder()
                .setSubject(user.getLogin())
                .setExpiration(data)
                .signWith(SignatureAlgorithm.HS512, signatureKey)
                .compact();
    }

    private Claims getClaims(String token) throws ExpiredJwtException {
        return Jwts
                .parser()
                .setSigningKey(signatureKey)
                .parseClaimsJws(token)
                .getBody();
    }
    public String getLoginUser(String token) throws ExpiredJwtException{
        return getClaims(token).getSubject();
    }

    public boolean validToken(String token) {
        try {
            Claims claims = getClaims(token);
            Date dateExpiration = claims.getExpiration();
            LocalDateTime date = dateExpiration.toInstant().atZone(ZoneId.systemDefault()).toLocalDateTime();
            return !LocalDateTime.now().isAfter(date);
        } catch (Exception e) {
            return false;
        }
    }

}
