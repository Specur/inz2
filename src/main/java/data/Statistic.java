package data;

import java.util.ArrayList;
import java.util.Set;

import db.JDBCenter;
import dto.BundesLigaDTO;
import dto.League;
import io.jsondb.annotation.Document;
import statistic.Score;


public class Statistic {
	 private JDBCenter jdb = new JDBCenter();
	 private ArrayList<League> allMatch;
	 private Score score = new Score();

	 private League lg ;

	
	public Score getScore(){
		return score;
	}
	
	public  void init(League leg){
		lg= leg;
	}
	
	public  void findAll(){
		allMatch = jdb.findAllMatchByTeam(lg);
		check();
	}
	
	public  void check(){
		ArrayList<League> matchThisSeason = new ArrayList();
		for(League league : allMatch){
			if(league.getDate().equals("2017-18")){
				matchThisSeason.add(league);
			}
			//u siebie
			if(league.getMaster().equals(lg.getMaster())){
				score.setGoalsShot(score.getGoalsShot() + Integer.parseInt(league.getGMaster()));
				score.setGoalsLose(score.getGoalsLose() + Integer.parseInt(league.getGGuest()));
				if(Integer.parseInt(league.getGMaster()) > Integer.parseInt(league.getGGuest())){
					score.setWin(score.getWin()+1);
					score.setWinAsMaster(score.getWinAsMaster() + 1);
				}
				if(Integer.parseInt(league.getGMaster()) == Integer.parseInt(league.getGGuest())){
					score.setDraw(score.getDraw() + 1);
					score.setDrawAsMaster(score.getDrawAsMaster() + 1);
				}
				if(Integer.parseInt(league.getGMaster()) < Integer.parseInt(league.getGGuest())){
					score.setLose(score.getLose() + 1);
					score.setLoseAsMaster(score.getLoseAsMaster() + 1);
				}
			}
			//wyjazd
			if(league.getGuest().equals(lg.getMaster())){
				score.setGoalsShot(score.getGoalsShot() + Integer.parseInt(league.getGGuest()));
				score.setGoalsLose(score.getGoalsLose() + Integer.parseInt(league.getGMaster()));
				if(Integer.parseInt(league.getGMaster()) > Integer.parseInt(league.getGGuest())){
					score.setLose(score.getLose()+1);
					score.setLoseAsGuest(score.getLoseAsGuest() + 1);
				}
				if(Integer.parseInt(league.getGMaster()) == Integer.parseInt(league.getGGuest())){
					score.setDraw(score.getDraw() + 1);
					score.setDrawAsGuest(score.getDrawAsGuest() + 1);
				}
				if(Integer.parseInt(league.getGMaster()) < Integer.parseInt(league.getGGuest())){
					score.setWin(score.getWin() + 1);
					score.setWinAsGuest(score.getWinAsGuest() + 1);
				}
			}
		}
		checkLast5match(matchThisSeason);
		
	}
	
	private void checkLast5match(ArrayList<League> matchThisSeason){
		
		for(int i = 0 ; i < matchThisSeason.size() ; i ++ ){
			//last 5 match
			if(i<5){
				
				if(matchThisSeason.get(i).getMaster().equals(lg.getMaster())){
					score.setL5mGoalsShot(score.getL5mGoalsShot() + Integer.parseInt(matchThisSeason.get(i).getGMaster()));
					score.setL5mGoalsLost(score.getL5mGoalsLost() + Integer.parseInt(matchThisSeason.get(i).getGGuest()));
					if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) > Integer.parseInt(matchThisSeason.get(i).getGGuest())){
						score.setL5mWin(score.getL5mWin()+1);
						System.out.println(matchThisSeason.get(i).toString());
						
					}
					if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) == Integer.parseInt(matchThisSeason.get(i).getGGuest())){
						score.setL5mDraw(score.getL5mDraw()+1);
					}
					if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) < Integer.parseInt(matchThisSeason.get(i).getGGuest())){
						score.setL5mLose(score.getL5mLose()+1);
					}
					
				}
				if(matchThisSeason.get(i).getGuest().equals(lg.getMaster())){
					score.setL5mGoalsShot(score.getL5mGoalsShot() + Integer.parseInt(matchThisSeason.get(i).getGGuest()));
					score.setL5mGoalsLost(score.getL5mGoalsLost() + Integer.parseInt(matchThisSeason.get(i).getGMaster()));
					if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) > Integer.parseInt(matchThisSeason.get(i).getGGuest())){
						score.setL5mLose(score.getL5mLose()+1);

						
					}
					if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) == Integer.parseInt(matchThisSeason.get(i).getGGuest())){
						score.setL5mDraw(score.getL5mDraw()+1);
					}
					if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) < Integer.parseInt(matchThisSeason.get(i).getGGuest())){
						score.setL5mWin(score.getL5mWin()+1);
						System.out.println(matchThisSeason.get(i).toString());
					}
				}
				
			}
			
			
			if(matchThisSeason.get(i).getMaster().equals(lg.getMaster())){
				score.setlSeasonmGoalsShot(score.getlSeasonmGoalsShot() + Integer.parseInt(matchThisSeason.get(i).getGMaster()));
				score.setlSeasonmGoalsLost(score.getlSeasonmGoalsLost() + Integer.parseInt(matchThisSeason.get(i).getGGuest()));
				if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) > Integer.parseInt(matchThisSeason.get(i).getGGuest())){
					score.setlSeasonmWin(score.getlSeasonmWin()+1);
					score.setlSeasonMWinAsMaster(score.getlSeasonMWinAsMaster()+1);
				}
				if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) == Integer.parseInt(matchThisSeason.get(i).getGGuest())){
					score.setlSeasonmDraw(score.getlSeasonmDraw()+1);
					score.setlSeasonMDrawAsMaster(score.getlSeasonMDrawAsMaster()+1);
				}
				if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) < Integer.parseInt(matchThisSeason.get(i).getGGuest())){
					score.setlSeasonmLose(score.getlSeasonmLose()+1);
					score.setlSeasonMLoseAsMaster(score.getlSeasonMLoseAsMaster()+1);
				}
				
			}
			if(matchThisSeason.get(i).getGuest().equals(lg.getMaster())){
				score.setlSeasonmGoalsShot(score.getlSeasonmGoalsShot() + Integer.parseInt(matchThisSeason.get(i).getGGuest()));
				score.setlSeasonmGoalsLost(score.getlSeasonmGoalsLost() + Integer.parseInt(matchThisSeason.get(i).getGMaster()));
				if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) > Integer.parseInt(matchThisSeason.get(i).getGGuest())){
					score.setlSeasonmLose(score.getlSeasonmLose()+1);
					score.setlSeasonMLoseAsGuest(score.getlSeasonMLoseAsGuest()+1);
				}
				if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) == Integer.parseInt(matchThisSeason.get(i).getGGuest())){
					score.setlSeasonmDraw(score.getlSeasonmDraw()+1);
					score.setlSeasonMDrawAsGuest(score.getlSeasonMDrawAsGuest()+1);
				}
				if(Integer.parseInt(matchThisSeason.get(i).getGMaster()) < Integer.parseInt(matchThisSeason.get(i).getGGuest())){
					score.setlSeasonmWin(score.getlSeasonmLose()+1);
					score.setlSeasonMWinAsGuest(score.getlSeasonMWinAsGuest()+1);
				}
			}
		}
		
	}
	
}
